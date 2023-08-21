function BFS(node) {
    let res = [];
    let queue = [];

    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);

    for (let i = 0; i < queue.length; ++i) {
        let curNode = queue[i];

        const val = curNode['val'];
        const left = curNode['left'];
        const right = curNode['right'];

        if (val !== undefined) {
            res.push(val);
        }

        if (left !== undefined) {
            queue.push(left);
        }

        if (right !== undefined) {
            queue.push(right);
        }
    }

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

console.log(BFS(test));