// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
//     Реализуйте его на прототипах.
//     Определите иерархию электроприборов.
//     Включите некоторые в розетку.
//     Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

//ПЛАН
//Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//  Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
//     использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.


function ElectricDevices(name, power, color) {  // Общие свойства электроприборов
        this.name = name,
        this.power = power,
        this.color = color,
        this.enabled = false;
}


function Fridge(name, power, color, temperature) {   // Холодильник
    this.name = name
    this.power = power
    this.color = color
    this.temperature = temperature;


    this.text = function () {  // Инфо о холодильнике
        console.log( "this.name has: "  + this.power +"W" + this.color + " color and " + this.temperature + "degrees")
    }
}


Fridge.prototype = new ElectricDevices(); //Наследование


function Microwave(name, power, color, numberOfModes) {  // Микроволновка
    this.name = name
    this.power = power
    this.color = color
    this.numberOfModes = numberOfModes;
}


Microwave.prototype = new ElectricDevices(); //Наследование


ElectricDevices.prototype.Enabled = function () {   //Включенность
    console.log(this.name + ' is on');
    this.enabled = true;
}


ElectricDevices.prototype.getPower = function () {
    return this.enabled ? this.power : 0;
}


const fridge = new Fridge('fridge', 100, 'white');
const microwave = new Microwave('microwave', 20, 'black', 5);


fridge.Enabled();
microwave.Enabled();


function sum(arr) { // Сумма мощей
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}


console.log(sum([fridge, microwave]))



