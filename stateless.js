//function are stateless

const counter = (amount) => {
    let count = 0;

    count = count + amount;
    return count;
};

console.log(counter(2));
console.log(counter(3));