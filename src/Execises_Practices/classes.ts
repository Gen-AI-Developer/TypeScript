class Account {
    nickname?: string;

    constructor(
        public readonly id: number,
        public name: string,
        private _balance: number) { }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("invalid Balance")
        this._balance += amount
    }
    //Getter
    get balance(): number {

        return this._balance
    }
}
let account = new Account(234, 'Safdar', 0)
account.deposit(1000)
console.log(account.balance)
// Getter and Setters