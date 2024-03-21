let employee: {
    id: number;
    readonly name: string;
    retire: (date: Date) => void
}
    = {
    id: 1,
    name: 'safdar',
    retire: (date: Date) => {
        console.log(date);
    }
};
 let one = employee
 