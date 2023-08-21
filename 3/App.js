function switchEl(arr, a) {
    if (arr.length > a + 1) {
        const el = arr[a + 1];
        arr[a + 1] = arr[a];
        arr[a] = el;
    }
}

function insertionSort(arr) {
    let newArr = [];

    if (arr.length > 0) {
        newArr.push(arr[0]);
    } else {
        return [];
    }

    for (let i = 1; i < arr.length; ++i) {
        newArr.push(arr[i]);

        for (let j = newArr.length - 1; j > 0; --j) {
            if (newArr[j] < newArr[j - 1]) {
                switchEl(newArr, j - 1);
            }
        }
    }

    return newArr;
}

const test = [5, 3, 2, 1, 4, 7, 6];
const test2 = [2, 1];
const test3 = [];
const test4 = [-1, 2, -3, 1, -2, 0];

console.log(insertionSort(test));
console.log(insertionSort(test2));
console.log(insertionSort(test3));
console.log(insertionSort(test4));