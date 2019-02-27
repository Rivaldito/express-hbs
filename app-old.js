const http = require('http');

http.createServer((requiere, respuesta) => {

        respuesta.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            Nombre: 'Sebastian',
            edad: 19,
            url: requiere.url
        }

        respuesta.write(JSON.stringify(salida));

        respuesta.end();

    })
    .listen(8080);

console.log("Escuchando el puerto 8080");