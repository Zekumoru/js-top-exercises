
const FIRST_PEG_INDEX = 1;
const SECOND_PEG_INDEX = 2;
const THIRD_PEG_INDEX = 3;

/*
    Outputs list of moves to solve stack number
    of discs.
*/
function hanoi(stack) {
    hanoiRecursive(stack, FIRST_PEG_INDEX, THIRD_PEG_INDEX, SECOND_PEG_INDEX);
}

/*
    Solves tower of hanoi recursively.
*/
function hanoiRecursive(stack, source, dest, extra) {
    // base case
    if (stack === 1) {
        hanoiMove(stack, source, dest);
        return;
    }
    
    // n-1 case
    hanoiRecursive(stack - 1, source, extra, dest);
    hanoiMove(stack, source, dest); // this line is also the nth case
    hanoiRecursive(stack - 1, extra, dest, source);
}

/*
    Prints out a single move.
*/
function hanoiMove(disk, source, dest) {
    console.log("Moved disk", disk, "from",
        convertPegToLetter(source), "to", convertPegToLetter(dest));
}

/*
    As its name suggest, converts peg index to a letter.
    This is to avoid confusion when referring to a disk.
*/
function convertPegToLetter(index) {
    return (index === FIRST_PEG_INDEX)? 'A' :
        (index === SECOND_PEG_INDEX)? 'B' : 'C';
}