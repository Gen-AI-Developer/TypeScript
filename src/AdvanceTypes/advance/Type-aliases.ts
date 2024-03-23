// In TypeScript, a type alias is a way to give a name to a type. 
// It allows you to create a new name for any type, including 
// primitive types, object types, union types, intersection types,
// and more.Type aliases are especially useful for defining complex
// or reusable types, improving code readability, and reducing
// repetition.




type Employee = {
    id: number;
    readonly name: string;
    retire: (date: Date) => void

}

let employe: Employee = {
    id: 1,
    name: 'safdar',
    retire: (date: Date) => {
        console.log(date);
    }
};

// 
//  Type Aliases
// 
type rgb = [number, number, number]

function getRandomColor(): rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return [r, g, b]
}
type User = {
    name: string,
    score: number,
}

const userOne: User = { name: 'Safdar', score: 100 }

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`)
}
formatUser(userOne)
formatUser({ name: 'safar', score: 234 })