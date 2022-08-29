// funcion suma
function sum(num1, num2) {
    return num1 + num2;
}

// funcion que llama a la funcion suma mediante un argumento
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// funcion que muestra por consola un mensaje luego de 5 segundos de haberla ejecutado
setTimeout(function () {
    console.log('Hola Javascript');
}, 5000)

// muestra por consola un mensaje de saludo
function greetings(name){
    console.log(`Hola ${name}`);
}

// ejecuta el la funcion greetings luego de 2 segundos de haberla ejecutado
setTimeout(greetings, 2000, 'Joaquin');