// My initial solution
const reverseString = function(string) {
    let reversedString = "";

    array = Array.from(string);
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += array[i];
    };

    return reversedString;

};

// Solution using only JavaScript array methods
const simplifiedReverseString = function(string) {
    string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
