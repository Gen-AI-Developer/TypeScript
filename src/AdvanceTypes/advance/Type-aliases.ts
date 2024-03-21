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