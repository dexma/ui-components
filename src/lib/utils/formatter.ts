const applyTwoDecimals = (number: number, decimal: string, grouping: string) =>
    parseFloat(number.toFixed(2))
        .toString()
        .replace(/,|\./g, decimal)
        .replace(/\B(?=(\d{3})+(?!\d))/g, grouping);

export const numberFormatter = (number: number, decimal: string, grouping: string) => {
    // const number = parseFloat(numberAsStr);
    if (number > 10000 || number < -10000) {
        return Math.floor(number)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, grouping);
    }
    if (number === 0) {
        return '0';
    }
    return applyTwoDecimals(number, decimal, grouping);
};

export const applyScientific = (number: number, decimal: string, exponential: number) =>
    number
        .toExponential(exponential)
        .replace(/\.([0-9]*[1-9])?0*/g, '.$1')
        .replace(/,|\./g, decimal);
