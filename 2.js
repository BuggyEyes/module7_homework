//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.
let apple = {};

apple.color = "green";
apple.weight = 2;
apple.mass = 2;

const str = 'color';
const potentialEnergy = 40;

function hasProperties(obj, str) {
    return (str in obj);
}

console.log(hasProperties(apple, str));
console.log(hasProperties(apple, potentialEnergy));

