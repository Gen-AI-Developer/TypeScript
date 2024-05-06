// Classes 101
type CBase = 'classic' | 'thin' | 'thick' | 'garlic'
interface hasFormater {
    format(): string
}
abstract class Menu implements hasFormater {
    constructor(private title: string, private price: number) { }
    public get details(): string {
        return `--${this.title} - ${this.price} `
    }
    format() {
        return 'this is string of hasformater. Interface'
    }
}

class CPizza extends Menu {
    constructor(title: string, price: number) {
        super(title, price)
    }
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
function printMenuItem(printMenuItem: Menu) {
    console.log(printMenuItem.details)

}