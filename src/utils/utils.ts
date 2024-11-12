import Decimal from "decimal.js";

export const stringToArr = (str: string) => {
    return str.split('');
}

export const arrToString = (arr: string[]) => {
    return arr.join('');
}

/**
 * 计算数组内数字的和
 * @param nums
 * @param precision 精度
 */
export const plus = (nums: number[], precision?: number): number => {
    precision && Decimal.set({ precision });
    const decimals = nums.map(num => new Decimal(Number(num)));
    const sum = decimals.reduce((next, pre) => next.plus(pre)).toNumber();
    return sum;
}

/**
 * 计算数组内数字的差
 * @param nums
 * @param precision 精度
 */
export const minus = (nums: number[], precision?: number): number => {
    precision && Decimal.set({ precision });
    const decimals = nums.map(num => new Decimal(Number(num)));
    const diff = decimals.reduce((next, pre) => next.minus(pre)).toNumber();
    return diff;
}

/**
 * 计算数组内数字的乘积
 * @param nums
 * @param precision 精度
 */
export const times = (nums: number[], precision?: number): number => {
    precision && Decimal.set({ precision });
    const decimals = nums.map(num => new Decimal(Number(num)));
    const product = decimals.reduce((next, pre) => next.times(pre)).toNumber();
    return product;
}

/**
 * 计算数组内数字的商
 * @param nums
 * @param precision 精度
 */
export const divide = (nums: number[], precision?: number): number => {
    precision && Decimal.set({ precision });
    const decimals = nums.map(num => new Decimal(Number(num)));
    const quotient = decimals.reduce((next, pre) => next.dividedBy(pre)).toNumber();
    return quotient;
}