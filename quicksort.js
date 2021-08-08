function quicksort(arr) {
    if(arr.length < 2) return arr;

    const pivot = arr[0];
    const less = findLessArray(arr);
    const greater = findGreaterArray(arr);

    return [...quicksort(less), pivot, ...quicksort(greater)];
}

function findLessArray(arr) {
    const pivot = arr[0];
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        if(pivot >= arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

function findGreaterArray(arr) {
    const pivot = arr[0];
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        if(pivot < arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(quicksort([20, 10, 5, 2, 15, 25, 6]));