function insertAtPos(array1, array2, pos) {
    if (pos < 0 || pos > array1.length) {
        console.log("Vi tri khong hop le");
        return;
    }
    const result = [
        ...array1.slice(0, pos),
        ...array2,
        ...array1.slice(pos)
    ];
    console.log(result);
}
insertAtPos([1, 2, 3], [4, 5], 1);