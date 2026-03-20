import { median } from './median';

test('test median for odd number of elements', () => {
    expect(median([1, 6, 2])).toBe(2); 
});

test('test median for even number of elements', () => {
    expect(median([1, 2, 5, 6])).toBe(3.5); 
});

test('test median for no elements should throw error', () => {
    expect(() => median([])).toThrow("List is empty!");
});