class Account {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id
        this.name = name
        this.balance = balance
    }
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("invalid Balance")
        this.balance += amount
    }
}
let account = new Account(234, 'Safdar', 0)
account.deposit(1000)
console.log(account)
console.log(Account)