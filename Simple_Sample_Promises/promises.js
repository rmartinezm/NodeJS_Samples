// Promesas para utilzar en main.js

/* div es una función que recibe 2 números como parametros y regresa una promesa
 * con la división entre ambos números
 */
let div = (num1, num2) => {
    return new Promise((req, rej) => {
        console.log("Inicia la división ...");
        if (num2 == 0){
            // Enviamos la respuesta de que la promesa fue rechazada            
            rej('No se puede dividir entre cero');
        } else {
            // Redondeamos el resultado a 2 decimales
            result = Math.round((num1/num2) + "e+2") / 100;
            result = `La división entre ${num1} y ${num2} es ${result}`;
            // Enviamos la respuesta de que la promesa fue cumplida
            req(result);
        }
        console.log("Terminó división ...");
    });
}

/* 
 * Función que regresa una promesa que simula una petición a algún sitio.
 * Está promesa demora al menos 2 segundos en terminar
 */
let someRequest = (result) => {
    return new Promise((req, rej) => {
        console.log("Inicia la petición al servidor...");
        setTimeout(() => {
            // Hacemos un random con 50% de posibilidades de que el proceso termine correctamente
            if (Math.random() < .5) req(result + "\nEl proceso terminó correctamente.");
            else rej("El servidor no respondió correctamente.");
            console.log("Terminó la petición al servidor.");
        }, 2000); // Simulamos que el proceso tarda al menos 2 segundos
    });
} 

/* 
 * Exportamos las 2 funciones que hicimos. 
 * Se obvia el nombre y la función, si quisieramos exportar la función con otro nombre se hace
 * de la siguiente forma
 
    module.exports = {
        div: "division",
        someRequest: "funcion_que_tarda"
    }

 */

module.exports = {
    div,
    someRequest
}

