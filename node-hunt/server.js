const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/node-api', 
    {useNewUrlParser: true}
);
requireDir('./src/models');

const Product = mongoose.model('Product');


//primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React native',
        description: 'Build Native apps with React',
        url:'https://github.com/Elian07/Curso-NodeJS',
    })
    return res.send('Hello Guys');
});

app.listen(3001);

