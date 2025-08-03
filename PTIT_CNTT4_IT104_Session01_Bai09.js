function mergeSortArray(array1, array2) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < array1.length && j < array1.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }
    return result.concat(array1.slice(i)).concat(array2.slice(j));
}
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortArray(array1, array2));