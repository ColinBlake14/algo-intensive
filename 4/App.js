function DFS(node, resArr) {
    console.log(resArr);
    const val = node['val'];
    const left = node['left'];
    const right = node['right'];

    if (val !== undefined) {
        resArr.push(val);
    }

    if (left !== undefined) {
        DFS(left, resArr);
    }

    if (right !== undefined) {
        DFS(right, resArr);
    }
}

function solution(node) {
    res = [];

    DFS(node, res);

    return res;
}


const test = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
}

console.log(solution(test));