const express = require('express');
const bodyParser = require('body-parser');
const Schema = require('../db/Schema.js');
const app = express();
const PORT = 5152;
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id', (req,res)=> {
  res.sendFile('index.html', {root: __dirname + '/../client/dist'})
});

app.get('/data/:id', (req, res) => {
  Schema.find({id: req.params.id}, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  });
});

app.patch('/data/:id', (req, res) => {
  Schema.updateOne({id: req.params.id},{selectedSize:req.body.selectedSize, selectedColor:req.body.selectedColor, selectedQty:req.body.selectedQty }, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

