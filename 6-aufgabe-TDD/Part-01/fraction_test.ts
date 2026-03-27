import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Fraction } from "./fraction.ts";

/*Deno.test("Fraction.cancel: 18/27 should become 2/3", () => {
  const f = new Fraction(18, 27);
  f.cancel(); 
  assertEquals(f.numerator, 2);
  assertEquals(f.denominator, 3);
});*/

Deno.test("Fraction: automatic cancellation in constructor", () => {
  const f = new Fraction(10, 20);
  assertEquals(f.numerator, 1);
  assertEquals(f.denominator, 2);
});