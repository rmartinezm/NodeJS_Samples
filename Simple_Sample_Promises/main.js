// Importamos las promesas del archivo promises.js
let promises = require("./promises");

// Parametros random para la división.
let param1 = Math.random() * 1000;
//let param2 = 0;
let param2 = Math.random() * 1000;

// LLamamos a la división como promesa y la ejecutamos
promises.div(param1, param2).then(
    (res) => {
        // Si el resultado de la promesa fue aceptada entonces llamamos retornamos
        // la promesa someRequest y le enviamos el resultado como parametro.
        return promises.someRequest(res);
    },
    (err) => {
        // Si la promesa fue rechazada arrojamos un error con el mensaje enviado desde la promesa.
        throw(err);
    }
).then( // Si se llega a este punto entonces la promesa anterior fue aceptada y podemos trabajar con ella.
    (res) => {
        // Si la promesa fue aceptada imprimimos el resultado de la división anterior.
        console.log(res);
    },
    (err) => {
        // Si la promesa fue rechazada arrojamos un error con el mensaje enviado desde la promesa.
        throw(err);
    }
).catch((err) => {
    // Manejamos e imprimimos el primer error ocurrido durante el proceso.
    console.log(err);
});