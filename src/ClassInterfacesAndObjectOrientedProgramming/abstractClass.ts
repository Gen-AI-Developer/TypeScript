class Shape {
    constructor(public color: string) {

    }
    render() { }
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }
    override render(): void {
        console.log(`Rendering a Circle`)
    }
}

let shape = new Shape('red');
shape.render();