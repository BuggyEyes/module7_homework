const animal = {
    color: "green",
    weight: 2,
}
function func(obj){
    obj = Object.create(animal);
    obj.ownName = "Dog";
    obj.ownHeight = 20;
    obj.ownOwner = "Ivan";


    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }

}
func();



//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств
//Данная функция не должна возвращать значение.