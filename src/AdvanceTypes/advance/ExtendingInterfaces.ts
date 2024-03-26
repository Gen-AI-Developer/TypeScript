interface Hasformater {
    format(): string
}

interface bill extends Hasformater {
    id: string | number
    amount: number
    server: string
}

const Userdetail = {
    id: 1,
    format(): string {
        return `this user has an id of ${this.id}`
    }
}

const bill = {
    id: 34,
    amo: 34,
    server: 'Google',
    format(): string {
        return `this user has an id of ${this.id}`

    }
}


function printFormated(value: Hasformater) {
    console.log(value.format)
}

printFormated(bill)
printFormated(Userdetail)