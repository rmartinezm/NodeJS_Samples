// Ejemplo de consumo API GoogleMaps

// Importamos request para realizar la petición
const request = require("request");

// Nombre de algún lugar del que queremos conocer las coordenadas
let address = "Facultad de Ciencias UNAM";
// Url del API GoogleMaps con la dirección que nosotros indicamos
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

request({
    // Pasamos el URL e indicamos que lo requeremos en formato JSON
    url: url,
    json: true
}, (err, response, body) => {
    // Este error ocurre cuando no fue posible conectarse a la API 
    if (err) console.log("Error al leer API");
    else if (body.status == "ZERO_RESULTS") // Si el lugar indicado no tiene resultados 
        console.log("No existe el lugar indicado");
    else if (body.status == "OVER_QUERY_LIMIT") 
        // Si se han hecho demasiadas peticiones simplemente basta con correr el programa otra vez
        console.log("Intenta correr el programa otra vez");
    else if (body.status == "OK"){  // Si se pudo conectar correctamente a la API la leemos
            let lat = body.results[0].geometry.location.lat;
            let lng = body.results[0].geometry.location.lng;
            console.log(`Las Coordenadas de ${address} son:\n  Latitud: ${lat}\n  Longitud: ${lng}`);
        }
});
