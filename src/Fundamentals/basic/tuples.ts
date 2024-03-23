let user2: [number, string] = [1, 'Safdar'];
user2[0].toString;
user2[1].length;
///-----------------//
///-Tuples TypeScript-//
///-----------------//
let dataFrame: [string, number, boolean] = ['safdar', 30, true]
///-----------------//
///-Tuple Examples TypeScript-//
///-----------------//
let hsla: [number, string, string, number]
hsla = [
    200,
    '100%',
    '50%',
    1
]
let xy_cords: [
    number,
    number
] = [12.2, 124.3]


function useCorrds(): [number, number] {
    const lat = 2000.4
    const long = 3049.4
    return [lat, long]
}

///-----------------//
///-Name Tuples TypeScript-//
///-----------------//
let chatUser: [name: string, age: string]

chatUser = ['Safdar', '15']
console.log(chatUser[0])