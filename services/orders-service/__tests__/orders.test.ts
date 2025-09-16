import { calculateFinalAmount } from '../src/orders';

test('NEW code subtracts 20', () => {
  expect(calculateFinalAmount({ id: '1', amount: 100, discountCode: 'NEW' })).toBe(80);
});

test('VIP code should subtract small percent (expected approx 85)', () => {
  expect(calculateFinalAmount({ id: '2', amount: 100, discountCode: 'VIP' })).toBe(85);
});
