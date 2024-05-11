// abstract class Calender {
//     constructor(public name: string) {

//     }
//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }


interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}
interface CloudCalendar extends Calender {
    sync(): void;
}

class GoogleCalender implements Calender {
    constructor(public name: string) { }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}