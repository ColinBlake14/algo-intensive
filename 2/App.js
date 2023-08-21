function switchEl(arr, a, b) {
    const el = arr[b];
    arr[b] = arr[a];
    arr[a] = el;
}

function selectionSort(arr) {
    let newArr = [].concat(arr);
    let start = 0;
    let l = arr.length;

    while (start < l - 1) {
        let min = start;

        for (let i = start + 1; i < l; ++i) {
            if (newArr[i] < newArr[min]) {
                min = i;
            }
        }

        if (min !== start) {
            switchEl(newArr, min, start);
        }

        start++;
    }

    return newArr;
}

const test = [5, 3, 2, 1, 4, 7, 6];
const test2 = [2, 1];
const test3 = [];
const test4 = [-1, 2, -3, 1, -2];

console.log(selectionSort(test));
console.log(selectionSort(test2));
console.log(selectionSort(test3));
console.log(selectionSort(test4));