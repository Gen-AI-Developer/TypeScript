interface hasQuantity {
    quantity: number
}

const something: hasQuantity = {
    quantity: 34
}

function printQuantity(item: hasQuantity): void {
    console.log('the Quantity of the item is ', item.quantity)
}

const fruit = {
    name: "Oranges",
    quantity: 213,
}
const Vehicles = {
    name: "Honda",
    quantity: 125,
}
const Person = {
    name: "Safar Ali Shah",
    age: 34,
}

printQuantity(fruit)
printQuantity(Vehicles)
printQuantity({ quantity: 23 })
printQuantity({ quantity: 23, title: 'title' })