type person = {
    id: string | number,
    firstname: string
}
type per = person & {
    email: string
}
const personone = {
    id: 3,
    firstname: 'Safdar Ali'
}
const persontwo: per = {
    id: 2,
    firstname: 'safdaf',
    email: 'emai@gmail.com'
}
function printPer(PER: per) {
    console.log(PER)
}
printPer(persontwo)
