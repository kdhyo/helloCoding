function sum(arr) {
    if(arr.length === 1) return arr[0];
    
    const one = arr.splice(0, 1);
    return one[0] + sum(arr);
}

function getArrayCount(arr) {
    if(arr.length === 1) return 1;

    arr.pop();
    return 1 + getArrayCount(arr);
}

function getMaxNumber(arr) {
    if(arr.length === 1) return arr[0];

    const last = arr.pop();
    const target = getMaxNumber(arr);
    return last >= target ? last : target;
}

console.log(sum([10, 5, 6, 2]));
console.log(getArrayCount([1, 5, 2, 3, 7]));
console.log(getMaxNumber([10, 5, 6, 2, 50]));
