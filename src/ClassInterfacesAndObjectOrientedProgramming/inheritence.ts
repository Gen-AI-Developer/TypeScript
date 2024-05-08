class AnyPerson {
    constructor(
        public firstName: string,
        public lastName: string,
    ) { }
    get fullName() { return this.firstName + ' ' + this.lastName }
    walk() { console.log("Walking") }
    talk() { console.log("Talking") }
}
class AnyStudent extends AnyPerson {
    constructor
        (
            public studentID: number,
            public firstName: string,
            public lastName: string
        ) {
        super(firstName, lastName)
    }
    takeTest() { console.log("Taking Test") }
}
/// Method Overriding

class Teacher extends AnyPerson {
   // This method will be overrided here from Base Class 
    get fullName() { return this.firstName + ' ' + this.lastName }
    walk() { console.log("Walking") }
    talk() { console.log("Talking") }

}
/// Method Overriding

let t = new Teacher('Syed', 'Safdar')
console.log(t.fullName)

// let ss = new AnyStudent(23, "Syed", "Safdar");
// console.log(ss.fullName)
// console.log(ss.talk())
// console.log(ss.takeTest())