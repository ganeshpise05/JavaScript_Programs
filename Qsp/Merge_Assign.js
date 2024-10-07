function a (str) {
    let count  = 0;
    for (let  i = 0;  i < str.length;  i++) {
        if (str.charAt(i) == ' ') {
            continue;
        }
        count++;
    }
    return count;
}

console.log(a("My name is Ganesh"));
