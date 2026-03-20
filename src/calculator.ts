export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(factorA: number, factorB: number): number {
  return factorA * factorB;
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division by zero is not defined!");
  }
  return dividend / divisor;
}

test('dividing by zero should throw an error', () => {
  const a = 10;
  const b = 0;
  expect(() => divide(a, b)).toThrow("Division by zero is not defined!");
});