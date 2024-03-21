function kgtoLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2
}
kgtoLbs(10)
kgtoLbs('10KG')