function getNumber(...args) {
    return args.map(arr => {return arr.reduce((sum, num) => sum + num, 0);});
}
console.log(getNumber([1, 2], [6, 7, 8], [12, 8]));