
var express = require('express');
const { Proposito } = require('../models');
var router = express.Router();


/* GET proposito index */
router.get('/', async function(req, res, next) {
  const propositos = await Proposito.findAll()
  res.send(propositos);
});

//POST create
router.post('/', async function(req, res){
  let body = req.body;
  const proposito = await Proposito.create(body);
  res.send(proposito);
});

//GET new
router.get('/new', async function(req, res, next) {
    res.send('Cadastro Proposito');
});

//GET show
router.get('/:id', async function(req, res, next) {
  const { id } = req.params;
  const proposito = await Proposito.findByPk(id);
  res.send(proposito);
});

//GET Edit
router.get('/:id/edit', async function(req, res, next) {
  console.log(req.params.id)
  res.send('Editar Proposito');
  });

//PUT Edit
router.put('/:id', async function(req, res, next) {
  const { 
    params: {
      id,
    },
    body,
  } = req;

  const proposito = await Proposito.findByPk(id);

  await proposito.update(body);

  res.send(proposito);
  });

//DELETE Delete
router.delete('/:id', async function(req, res, next) {
  const { id } = req.params;
  const proposito = await Proposito.findByPk(id);

  await proposito.destroy();

  res.send(proposito);
  });

module.exports = router;
