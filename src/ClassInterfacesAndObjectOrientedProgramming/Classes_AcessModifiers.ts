// Classes 101
type Base3 = 'classic' | 'thin' | 'thick' | 'garlic'

class Pizza3 {
    constructor(private title: string, private price: number) {
        // this.title = title
        // this.price = price

    }
    // title: string
    // price: number
    base: Base = 'classic'
    toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}
const pizza3 = new Pizza3('Cheeious Special', 1400)
pizza.addTopping('Olive')
pizza.addTopping('Cream')
pizza.selectBase("thick")
console.log('Pizza', pizza)
