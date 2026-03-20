import { add, subtract } from "./calculator";
import { mean } from "./average";

test("add three to two is five", () => {
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;
  const actual = add(a, b);
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;
  const actual: number = subtract(a, b);
  expect(actual).toBe(expected);
});

test('test mean of five numbers', () => {
  const numbers = [2, 4, 6, 8, 10];
  const expected = 6;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

test('test mean of no numbers should throw error', () => {
  expect(() => mean([])).toThrow("List is empty!");
});