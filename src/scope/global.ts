// Variables

// var a; // Declarando
// var b = 'b' // Declarción y asignación
// b = 'bb'; // Reasignación
// var a = 'aa'; // Redeclaración

// Global scope
const fruit = 'Apple';
console.log(fruit);

const bestFruit = () => {
    console.log(fruit);
};

bestFruit();

const constries = () => {
    country = 'Argentina';
    console.log(country);
};
constries();
console.log(country);
