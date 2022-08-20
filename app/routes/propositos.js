
var express = require('express');
var router = express.Router();

let propositos = [{nome:1,idade:10}];

/* GET proposito index */
router.get('/', function(req, res, next) {
  res.send(propositos);
});

//POST create
router.post('/', function(req, res){
    let body = req.body;
    propositos.push(body);
    res.send(propositos);
});

//GET new


router.get('/new', function(req, res, next) {
    res.send('Cadastro Proposito');
  });

//GET show
router.get('/:id', function(req, res, next) {
    console.log(req.params.id)
    res.send('Proposito especifico');
  });

//GET Edit
router.get('/:id/edit', function(req, res, next) {
    console.log(req.params.id)
    res.send('Editar Proposito');
  });

//PUT Edit
router.put('/:id', function(req, res, next) {
    res.send('Editar Proposito');
  });

//DELETE Delete
router.delete('/:id', function(req, res, next) {
    res.send('Deletar Proposito');
  });

module.exports = router;
