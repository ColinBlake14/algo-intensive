function switchEl(arr, a) {
    if (arr.length > a + 1) {
        const el = arr[a + 1];
        arr[a + 1] = arr[a];
        arr[a] = el;
    }
}

function bubbleSort(arr) {
    const newArr = [].concat(arr);
    let sorted = false;
    let l = newArr.length;

    while (l > 1 && !sorted) {
        sorted = true;

        for (let i = 0; i < l - 1; ++i) {
            if (newArr[i] > newArr[i + 1]) {
                switchEl(newArr, i);
                sorted = false;
            }
        }
    }
    
    return newArr;
}

const test = [5, 3, 2, 1, 4, 7, 6];
const test2 = [2, 1];
const test3 = [];
const test4 = [-1, 2, -3, 1, -2];

console.log(bubbleSort(test));
console.log(bubbleSort(test2));
console.log(bubbleSort(test3));
console.log(bubbleSort(test4));