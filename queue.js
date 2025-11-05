//Queue Implementation using Array


//Array implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.shift()
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            return this.items[0]
        }
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        // console.log(this.items.slice().reverse().join("->"));
        console.log(this.items.map(item => typeof item === "object" ? JSON.stringify(item) : item).slice().reverse().join("->"));
    }
};

const queue1 = new Queue();
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
// stack1.print();
queue1.enqueue("shantunu");
queue1.enqueue({ name: 'supta' });
queue1.enqueue(true);
queue1.enqueue([10, 20, 30]);
queue1.print();
console.log(queue1.peek());
console.log(queue1.dequeue());
queue1.print();
