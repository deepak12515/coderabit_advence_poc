export function ensurePositiveNumber(n: number, name = 'value') {
    if (typeof n !== 'number' || Number.isNaN(n) || n <= 0) {
      throw new Error(`${name} must be a positive number`);
    }
    return n;
  }
  