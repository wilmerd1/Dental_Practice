const express = require('express');
const path = require('path');



// Initializations
const app = express();


// Settings

app.set('port', process.env.PORT || 3000);
app.set('views',  path.join(__dirname, 'views'));


// Middlewares -- funciones que se van ejecutando

app.use(express.urlencoded({extended:false}));



// Global Variables



// Routes

app.get('/', (req, res) => {
    res.send('Hello World desde NodeJs con Express \n Andres Duque');
});

// Static Files

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;