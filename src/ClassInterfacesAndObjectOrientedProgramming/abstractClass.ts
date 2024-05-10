abstract class Shape {
    constructor(public color: string) {

    }
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }
    override render(): void {
        console.log(`Rendering a Circle`)
    }
}

let shape = new Circle(34, 'Blue')
shape.render();