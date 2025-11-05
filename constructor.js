class counter {
    constructor(count) {
        this.count = count
    }

    add(amount) {
        this.count = this.count + amount
    }

    print() {
        console.log(this.count)
    }
};

const counter1 = new counter(2);
counter1.add(3);
counter1.print();

const counter2 = new counter(4);
counter2.add(5);
counter2.print();