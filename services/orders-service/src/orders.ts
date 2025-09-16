export type Order = {
  id: string;
  amount: number;
  discountCode?: string;
};

export function calculateFinalAmount(order: Order): number {
  const { amount, discountCode } = order;
  let discount = 0;

  // FIXED: VIP should be 15% discount (0.15 * amount)
  if (discountCode === 'VIP') {
    discount = amount * 0.15;
  } else if (discountCode === 'NEW') {
    discount = 20;
  }

  // Avoid premature rounding; round to 2 decimals if needed
  const final = Math.round((amount - discount) * 100) / 100;
  return final;
}
