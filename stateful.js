//object are stateful

const counter = {
    count: 0,

    add(amount) {
        this.count = this.count + amount
    },

    print() {
        console.log(this.count)
    }
};

counter.add(2);
counter.add(3);
counter.print();