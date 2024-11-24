
class BankAccount {
    constructor(public readonly id: number, private balance: number, public name: string) { }

    get Balance() {
        return this.balance;
    }

    set deposit(amount: number) {
        this.balance = this.balance + amount
    }
}

const Person = new BankAccount(190237, 23000, "Jewel");
Person.deposit = 60;
console.log(Person.Balance)