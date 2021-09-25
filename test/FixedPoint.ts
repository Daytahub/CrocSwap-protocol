import { BigNumber } from 'ethers';

const PRECISION = 100000000
const Q_64 = BigNumber.from(2).pow(64);
const Q_48 = BigNumber.from(2).pow(48);

export const MIN_TICK = -665454
export const MAX_TICK = 831818

export function toFixedGrowth (mult: number) {
    let multFixed = Math.round(mult * PRECISION);
    return BigNumber.from(multFixed).mul(Q_48).div(PRECISION)
}

export function fromFixedGrowth (val: BigNumber) {
    return val.mul(PRECISION).div(Q_48).toNumber() / PRECISION;
}

export function toSqrtPrice (price: number) {
     let sqrtFixed = Math.round(Math.sqrt(price) * PRECISION);
     return BigNumber.from(sqrtFixed).mul(Q_64).div(PRECISION)
}

export function fromSqrtPrice (val: BigNumber) {
    let root = val.mul(PRECISION).div(Q_64).toNumber() / PRECISION;
    return root * root;
}

export function maxSqrtPrice(): BigNumber {
    return BigNumber.from("1461446703485210103287273052203988822378723970342").sub(1)
}

export function minSqrtPrice(): BigNumber {
    return BigNumber.from("4295128739")
}
