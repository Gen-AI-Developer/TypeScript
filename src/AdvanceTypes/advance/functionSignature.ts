/// Function Signature in Typescript

type Cal = (none: number, ntwo: number) => number
function add2Number(a: number, b: number) {
    return a + b
}
function multi2number(a: number) {
    return a * a
}
function join2Number(a: number, b: number) {
    return `${a}${b}`
}

let calcs: Cal[] = []
calcs.push(add2Number)
calcs.push(multi2number)
calcs.push()

////function signature on interfaces

interface HasArea {
    name: string
    calcarea(a: number): number
}
const shapeOne: HasArea = {
    name: 'Square',
    calcarea(l: number) {
        return l * l
    }
}

const shapeTwo: HasArea = {
    name: 'circle',
    calcarea(r: number) {
        return Math.PI * (r * r)
    }
}

shapeOne.calcarea(34)
shapeTwo.calcarea(34)