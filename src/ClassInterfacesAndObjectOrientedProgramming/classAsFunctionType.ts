// Classes 101
type CBase = 'classic' | 'thin' | 'thick' | 'garlic'

class CPizza {
    constructor(title: string, price: number) {
        this.title = title
        this.price = price

    }
    title: string
    price: number
    base: CBase = 'classic'
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
const cpizza = new CPizza('Cheeious Special', 1400)
pizza.addTopping('Olive')
pizza.addTopping('Cream')
pizza.selectBase("thick")
console.log('Pizza', pizza)
function addMashroomOnPizza(params: CPizza[]) {
    for (const p of params) {
        p.addTopping("MashRooms")
    }
}
addMashroomOnPizza([cpizza])