class AnyPerson {
    constructor(
        public firstName: string,
        public lastName: string,
    ) { }
    get fullName() {return this.firstName + ' ' + this.lastName}
    walk() {console.log("Walking")}
    talk() {console.log("Talking")}}
class AnyStudent extends AnyPerson { 
    constructor(public studentID: number, public firstName: string, public lastName: string) {
        super(firstName, lastName)
    }
    takeTest() {console.log("Taking Test")}
}
let ss = new AnyStudent(23, "Syed", "Safdar");
console.log(ss.fullName)
console.log(ss.talk())
console.log(ss.takeTest())