const removeFromArray = function (arr, ...nums) {
    for (num of nums) {
        let currentNum = num;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === currentNum) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

removeFromArray([1, 2, 2, 4], 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
