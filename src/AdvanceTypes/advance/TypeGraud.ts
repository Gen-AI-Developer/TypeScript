//
// Type Graud
//
type ID = number | string
function swapIDType(id: ID) {
    if (typeof (id) == 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}
const ONe = swapIDType(234)
const Two = swapIDType('2025')

console.log('ONe , Two', ONe, Two)

//// Taggged Interfaces

interface AccountDetails {
    type: "AccountDetails"
    username: string,
    email: string,
    id: ID
}

interface AccountData {
    type: "AccountData"
    username: string,
    email: string,
    id: ID
}

function AccountChecker(value: AccountData | AccountDetails): void {
    if (value.type === "AccountData") {
        console.log('AccountData Object data ', value.username)
    }
    if (value.type === "AccountDetails") {
        console.log('AccountDetails Object Data', value.username)

    }
}