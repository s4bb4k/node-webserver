const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'nombre prueba'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});
