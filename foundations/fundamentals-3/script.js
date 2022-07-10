
/*
    Takes a number and returns that number plus 7
*/
function add7(num) {
    return num + 7;
}

/*
    Takes two numbers and returns their product
*/
function multiply(a, b) {
    return a * b;
}

/*
    Takes a string and returns it with only the first
    letter capitalized. Also trims the string.
*/
function capitalize(str) {
    let trim = str.trim();
    let lowercase = trim.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.substring(1);
}
