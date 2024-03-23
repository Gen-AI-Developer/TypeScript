function calculator (...numbers: number[]){
    return numbers.reduce((a, b) => a + b, 0)
}
