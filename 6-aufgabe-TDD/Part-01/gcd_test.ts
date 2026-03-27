import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { gcdBruteForce } from "./gcd.ts";

const gcdTests = [
  { a: 1, b: 1, expected: 1 },
  { a: 6, b: 9, expected: 3 },
  { a: 81, b: 36, expected: 9 }
];

/*Deno.test("gcdBruteForce: Table-Driven Tests", () => {
  for (const { a, b, expected } of gcdTests) {
    const actual = gcdBruteForce(a, b);
    assertEquals(actual, expected, `Failed for gcd(${a}, ${b})`);
  }
});*/

Deno.test("gcdEuclid: Table-Driven Tests", () => {
  for (const { a, b, expected } of gcdTests) {
    const actual = gcdEuclid(a, b); 
    assertEquals(actual, expected);
  }
});