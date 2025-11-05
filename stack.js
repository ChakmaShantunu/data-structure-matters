//Stack Implementation using Array

//push = element add hote thaka last er pore
//pop = je element last add hoyeche take ber kore niye asa
//peek = last element dekha

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            return this.items[this.items.length - 1]
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

const stack1 = new Stack();
stack1.push(2);
stack1.push(3);
stack1.push(4);
// stack1.print();
stack1.push("shantunu");
stack1.push({ name: 'supta' });
stack1.push(true);
stack1.push([10, 20, 30]);
// console.log(stack1.peek());
// console.log(stack1.pop());
stack1.print();
