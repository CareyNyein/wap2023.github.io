function printNumbers(from, to) {
    let start = from;

    const intervalId = setInterval(() => {
        console.log(start);
        start++;

        if (start > to) {
            clearInterval(intervalId);
        }
    }, 1000);
}

printNumbers(1,20);

// printNumbers(20, 25);