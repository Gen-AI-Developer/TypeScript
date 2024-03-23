function cal(income: number, taxYear = 2022): number {
    if (income < 50000)
        if (taxYear < 2024)
            return income * 1.3;
    return income * 3
}
cal(400000, 2025)

///-----------------//
///-Function TypeScript-//
///-----------------//

function _addTwoNumber(a: number, b: number): number {
    return a + b
}

const _subtractTwoNumber = (a: number, b: number): number => {
    return a - b
}

function _addAllItems(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    console.log('total', total)

}

_addTwoNumber(1, 2)
_subtractTwoNumber(2, 3)
_addAllItems([1, 2, 3, 4, 5, 66, 77, 88, 99])
///-----------------//
///-Function TypeScript-//
/// Return  type inference ///
///-----------------//
function _formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}`
}