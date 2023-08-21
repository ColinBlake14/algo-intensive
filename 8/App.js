function binSearch(arr, num) {
    let l = 0;
    let r = arr.length;

    while (l + 1 < r) {
        let mid = Math.ceil((l + r) / 2);

        if (arr[mid] > num) {
            r = mid;
        } else {
            l = mid;
        }
    }

    if (arr[l] === num) {
        return l;
    } else {
        return -1;
    }
}


const test = [-3, 0, 1, 3, 5, 6];

console.log(binSearch(test, 4));