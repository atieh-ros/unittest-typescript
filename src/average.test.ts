import { mean } from "./average";

test("test mean of two numbers", () => {
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;
  const actual: number = mean(numbers);
  expect(actual).toBe(expected);
});

test('test mean of five numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = 3;
    const result = mean(numbers);
    expect(result).toBe(expected);
});

test('test mean of no numbers', () => {
    expect(() => {
        mean([]);
    }).toThrow("List is empty!"); 
});