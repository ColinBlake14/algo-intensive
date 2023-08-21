function solution(str) {
    const map = new Map();
    const arr = [];

    map.set("[", "check");
    map.set("(", "check");
    map.set("{", "check");
    map.set(")", "(");
    map.set("]", "[");
    map.set("}", "{");

    for (let sym of str) {
        if (map.has(sym)) {
            const val = map.get(sym);

            if (val === "check") {
                arr.push(sym);
            } else {
                if (arr.length === 0) {
                    return false;
                }

                const symToCheck = arr.pop()

                if (symToCheck !== val) {
                    return false;
                }
            }
        }
    }

    if (arr.length > 0) {
        return false;
    }

    return true;
}

console.log(solution(""));
console.log(solution("g[sd"));
console.log(solution("[]()9[{}]"));
console.log(solution("ffhd)"));
console.log(solution("()([)"));