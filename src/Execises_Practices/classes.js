var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("invalid Balance");
        this.balance += amount;
    };
    return Account;
}());
var account = new Account(234, 'Safdar', 0);
account.deposit(1000);
console.log(account);
console.log(Account);
