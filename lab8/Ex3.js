Array.prototype.mysort = function () {
    let arr = this;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
};

console.log([7, 5, 2, 4, 3, 9].mysort());