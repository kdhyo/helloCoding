function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 1; i < arr.length; i++) {
        if(smallest > arr[i]) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

function selectionSort(arr) {
    const newArr = [];
    const forLength = arr.length;
    for(let i = 0; i < forLength; i++) {
        const smallestIndex = findSmallestIndex(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }
    return newArr;
}

console.log(selectionSort([4, 10, 3, 12, 50, 30]));
