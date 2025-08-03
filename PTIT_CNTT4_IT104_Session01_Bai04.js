function checkParity(a) {
    if (typeof a !== "number" || !Number.isInteger(a)) {
        return `${a} khong phai la so nguyen`;
    }
    return (a % 2 === 0) ? `${a} la so chan` : `${a} la so le`;
}
console.log(checkParity(10));
console.log(checkParity(7));