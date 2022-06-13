// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input !== "string") {
        return `Hello, World!`
    }
    return `Hello, ${input}!`
}

function isFive (input) {
    return input === 5;
}

function isEven (number) {
    return parseFloat(number) % 2 === 0;
}

function isVowel(x) {
    return "aeiouAEIOU".indexOf(x) !== -1;
}

function add (x, y) {
    return Number(x) + Number(y);
}