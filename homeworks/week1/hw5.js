function join(str, concatStr) {
    let joinedarray = [];
    for (let i = 0; i < str.length; i++) {
        joinedarray.push(str[i]);
        joinedarray.push(concatStr);
    }
    joinedarray.pop();
    return joinedarray.toString();
}

function repeat(str, times) {
    let repeatedarray = [];
    for (let i = 0; i < times; i++) {
        repeatedarray.push(str);
    }
    return repeatedarray.toString();
}