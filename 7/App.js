function primeNumbers(num) {
    const arr = [];
    const res = [];

    for (let i = 2; i <= num; ++i) {
        arr.push({
            val: i,
            prime: true,
        })
    }

    for (let i = 0; i < arr.length; ++i) {
        const val = arr[i].val;

        if (arr[i].prime) {
            res.push(val);
        }

        for (let j = 2; val * j <= num; ++j) {
            arr[val * j - 2].prime = false;
        }
    }

    return res;
}

console.log(primeNumbers(50));