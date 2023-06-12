function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    let newNode = {
        value: value,
        next: null
    };

    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
};

LinkedList.prototype.remove = function (value) {
    if (this.head === null) {
        return;
    }

    if (this.head.value === value) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        let previous = null;

        while (current !== null && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current !== null) {
            previous.next = current.next;
        }
    }
};

LinkedList.prototype.print = function () {
    let current = this.head;
    let values = [];

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log("LinkedList{" + values.join(",") + "}");
};

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // Output: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print(); // Output: LinkedList{1,3}