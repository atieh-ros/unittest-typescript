import { gcdBruteForce } from "./gcd.ts";

export class Fraction {
  constructor(public numerator: number, public denominator: number) {
    this.cancel(); 
  }
  cancel(): void {
    const commonFactor = gcdBruteForce(this.numerator, this.denominator);
    this.numerator = this.numerator / commonFactor;
    this.denominator = this.denominator / commonFactor;
  }
}

