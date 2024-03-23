///-----------------//
///----A R R A Y----//
///-----------------//
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ages: number[] = [13, 23, 32, 33, 44]
let names: string[] = ['Safar', 'Ali', 'Shah']

names.push('Bukhari')
///-----------------//
///-OBJECT LITERALS-//
///-----------------//
let user: { firstName: string, age: number, id: number, } = { firstName: 'Safdar Ali Shah', age: 30, id: 1 }
///-------------------------------------//
///-Type inference with object literals-//
///------------------------------------//
let person = {
    name: 'safdar',
    score: 23
}

person.name = 'safdar'
person.score = 234
const s = person.score