const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//express hbs
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {

    res.render('index', {
        nombre: 'Sebastian',
        condenado: 'Marico el que lo lea',
        data: new Date().getUTCFullYear()
    });
});

/*
app.get('/', (req, res) => {

    //res.send('Hola mundo');

    let salida = {
        Nombre: 'Sebastian',
        edad: 19,
        url: req.url
    };
    //express ya serializa la salida en un formato .JSON
    res.send(salida);
}); */


app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});