function binarySearch(item) {
    const list = [...Array(100)].map((_, index) => index + 1);
    let low = 0;
    let high = list.length;

    while (low <= high) {
        const mid = Math.round((low + high) / 2);
        console.log(mid);
        const guess = list[mid];

        if (guess === item) {
            return mid;
        }
        else if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1
        }
    }
    return null;
}

console.log(binarySearch(10) + "콘솔로그");