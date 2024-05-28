const express = require('express');
const db = require('./db');
const artistsController = require('./controllersArtists');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/artists', artistsController.all);
app.get('/artists/:id', artistsController.findById);
app.post('/artists', artistsController.create);
app.put('/artists/:id', artistsController.update);
app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/api', function (err, database) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function () {
    console.log('API app started');
  });
});
