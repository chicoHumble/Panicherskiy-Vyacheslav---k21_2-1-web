const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const data = [
    { name: 'Item1', description: 'Description1' },
    { name: 'Item2', description: 'Description2' },
    { name: 'Item3', description: 'Description3' },
    { name: 'Item4', description: 'Description4' },
    { name: 'Item5', description: 'Description5' },
];

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/items', (req, res) => {
    res.render('items', { items: data });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

app.get('/help', (req, res) => {
    res.render('help', { title: 'Help' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
