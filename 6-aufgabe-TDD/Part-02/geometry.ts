export class Point2D {
    constructor(public x: number, public y: number) {}
    isBetweenX(p: Point2D, q: Point2D): boolean {
        return this.x > p.x && this.x < q.x;
    }

    isBetweenY(p: Point2D, q: Point2D): boolean {
        return this.y > p.y && this.y < q.y;
    }
    distanceTo(other: Point2D): number {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}

export interface Shape {
    encompasses(other: Shape): boolean; 
}

export class Circle implements Shape {
    constructor(public center: Point2D, public radius: number) {}
    encompasses(other: Shape): boolean {
        if (other instanceof Rectangle) {
            const corners = [other.a, other.b, other.c, other.d]; 
            return corners.every(corner => this.center.distanceTo(corner) <= this.radius);
        }
        return false;
    }
    north(): Point2D { return new Point2D(this.center.x, this.center.y + this.radius); }
    south(): Point2D { return new Point2D(this.center.x, this.center.y - this.radius); }
    east(): Point2D { return new Point2D(this.center.x + this.radius, this.center.y); }
    west(): Point2D { return new Point2D(this.center.x - this.radius, this.center.y); }
}

export class Rectangle implements Shape {
    constructor(public a: Point2D, public b: Point2D, public c: Point2D, public d: Point2D) {}
    encompasses(other: Shape): boolean {
        if (other instanceof Circle) {
            const pointsToCheck = [
                other.center,
                other.north(),
                other.east(),
                other.south(),
                other.west()
            ];
            return pointsToCheck.every(p => 
                p.isBetweenX(this.a, this.b) && 
                p.isBetweenY(this.a, this.d)
            );
        }
        return false;
    }
}