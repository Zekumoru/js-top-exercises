
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
    letter capitalized.
*/
function capitalize(str) {
    const letterRegex = /[a-z]/i;
    
    let firstLetterIndex = str.search(letterRegex);
    let firstLetterUpperCased = 
        str.charAt(firstLetterIndex).toUpperCase();

    return str.toLowerCase()
        .replace(letterRegex, firstLetterUpperCased);
}

/*
    Takes a string and returns the last character
*/
function lastLetter(str) {
    return str.substr(-1, 1);
}
