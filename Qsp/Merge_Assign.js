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

console.log("--------------------------");



function b(str) {
    if (str.length>=3) {
        return str.charAt(2);
    } else {
        return "length is short";
    }
}

console.log(b("abc"));
console.log(b("xy"));

console.log("--------------------------");

function c (str) {
    if (str.length % 2 != 0) {
        if ( str.length == 1) {
            return str.charCodeAt(0);
        }
    } else {
        
    }
}

console.log("--------------------------");

console.log("--------------------------");