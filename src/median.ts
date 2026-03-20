export function median(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("List is empty!");
    }

    const sorted = [...numbers].sort((a, b) => a - b);
    
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 !== 0) {
        return sorted[middle];
    } else {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
}
