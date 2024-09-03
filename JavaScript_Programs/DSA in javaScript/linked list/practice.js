class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }

    // adding new value
    add(data) {
        let newNode = {
            value: data,
            next: null,
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

    }
    // travesing

    traversing() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++
        }
    }
}


const list1 = new LinkedList(40);

list1.add(43);
list1.add(56);
list1.traversing();
// console.log(list1);