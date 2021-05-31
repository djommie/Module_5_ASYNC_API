const addNums = (...nums) => {
    return nums.reduce((previous, current) => {
        return previous + current;
    })
};

console.log(addNums(1, 2, 3, 4, 5));

const addNums2 = (num1, num2, num3, num4) => {
    return num1 + num2 + num3 + num4;
}

const nums = [1, 2, 3, 4];

console.log(addNums2(...nums));