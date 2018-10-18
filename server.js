const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Middleware
app.use(express.static(__dirname + '/public'));


// Expres HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/about', function(req, res) {
    res.render('about');
});


app.listen(3000, () => {
    console.log(`Escuchando en el puerto ${port}`);
});