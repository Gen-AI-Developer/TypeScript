function cal(income: number, taxYear=2022 ): number {
    if (income < 50000)
        if(taxYear<2024)
        return income * 1.3;
    return income*3
}
cal(400000,2025)