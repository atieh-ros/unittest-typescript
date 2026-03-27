import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("Circle cardinal points: North and South", () => {
    const center = new Point2D(5, 5);
    const circle = new Circle(center, 5);
    assertEquals(circle.north().y, 10);
    assertEquals(circle.south().y, 0);
});

Deno.test("Point2D: isBetween X and Y", () => {
    const center = new Point2D(5, 5);
    const west = new Point2D(0, 5);
    const east = new Point2D(10, 5);
    const north = new Point2D(5, 10);
    const south = new Point2D(5, 0);    
    assertEquals(center.isBetweenX(west, east), true);
    assertEquals(center.isBetweenY(south, north), true);    
    assertEquals(west.isBetweenX(center, east), false);
});


Deno.test("Rectangle encompasses Circle: positive and negative cases", () => {
    const rect = new Rectangle(
        new Point2D(0, 0),   // A
        new Point2D(10, 0),  // B
        new Point2D(10, 10), // C
        new Point2D(0, 10)   // D
    );
    const insideCircle = new Circle(new Point2D(5, 5), 2);
    const outsideCircle = new Circle(new Point2D(5, 5), 6);
    assertEquals(rect.encompasses(insideCircle), true);
    assertEquals(rect.encompasses(outsideCircle), false);
});

Deno.test("Circle encompasses Rectangle: positive and negative cases", () => {
    const center = new Point2D(5, 5);
    const circle = new Circle(center, 5);
    const smallRect = new Rectangle(
        new Point2D(4, 4), new Point2D(6, 4), 
        new Point2D(6, 6), new Point2D(4, 6)
    );
    const largeRect = new Rectangle(
        new Point2D(0, 0), new Point2D(10, 0), 
        new Point2D(10, 10), new Point2D(0, 10)
    );
    assertEquals(circle.encompasses(smallRect), true);
    assertEquals(circle.encompasses(largeRect), false);
});