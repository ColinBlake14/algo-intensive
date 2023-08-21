function reverse(listItem) {
    let current = listItem.next;
    let prev = listItem;
    listItem.next = null;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
}

const item3 = {
    val: 3,
    next: null
}

const item2 = {
    val: 2,
    next: item3
}

const item1 = {
    val: 1,
    next: item2
}

console.log(item1);

reverse(item1);

console.log(item3);