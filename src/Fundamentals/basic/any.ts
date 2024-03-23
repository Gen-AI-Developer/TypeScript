let u: any = true;
u = "string";
u = 12345543.72 // 
Math.round(u);
console.log(Math.round(u))

///-----------------//
///-Any Type TypeScript-//
///-----------------//

let _age: any = 12
_age = true
_age = 2.3


///-----------------//
///-Any Tpe in Arrays TypeScript-//
///-----------------//
let _things: any[] = ['hello', true, 2, 3 / 2, null, undefined]
_things.push('thisissomethingelse')

///-----------------//
///-Function & Any TypeScript-//
///-----------------//

function _addTogether(value: any): any {
    return value + value
}
