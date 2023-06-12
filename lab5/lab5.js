function sum() {
    return arr.filter(element => element > 20)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const getNewArray = function (arr) {
    return arr.filter(str => str.length >= 5 && str.includes('a'))
        .map(str => str);
}

arr = [23, 8, 2, 44];
console.log(`Sum of all elements which are greater than 20: ${sum(arr)}`)

arr2 = ['hello', 'hi', 'greetings', 'greater'];
console.log(`Array of string, length is greater than and equal to 5, and contains letter 'a': ${getNewArray(arr2)}`)