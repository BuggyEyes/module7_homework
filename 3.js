//Написать функцию, которая создает пустой объект, но без прототипа.

function emptyFunc() {
    const emptyObj = Object.create(null);
}
emptyFunc()