
var express = require('express');
const { Proposito, Diretriz, Objetivo, Indicador } = require('../models');
var router = express.Router();
var crypto = require('crypto')


/* GET proposito index */
router.get('/', async function(req, res, next) {
  try {
    const propositos = await Proposito.findAll({ raw: true, where: req.query })
    res.render('propositos/index', { propositos });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//POST create
router.post('/', async function(req, res){
  try {
    console.log(req.body)
    if(req.body.edit === 'true') {
      const proposito = await Proposito.findByPk(req.body.id);

      const parsedBody = { ...req.body };

      delete parsedBody.id;
      delete parsedBody.edit;

      await proposito.update(parsedBody);
      const pId = req.query.proposito;
      res.redirect(pId ? `/propositos/${pId}/geral` : '/propositos');
    } else {
      const proposito = await Proposito.create(req.body);
    
      res.redirect('/propositos');
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET new
router.get('/new', async function(req, res, next) {
  try {
    res.render('propositos/new', { edit: false });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET ID
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const proposito = await Proposito.findByPk(id, { include: { model: Diretriz, include: { model: Objetivo } }});
    res.send(proposito);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET ID
router.get('/:id/geral', async function(req, res, next) {
  try {
    const { id } = req.params;
    const proposito = await Proposito.findByPk(id, { include: { all: true, nested: true }});;
    res.render('geral', { proposito });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});


//GET Edit
router.get('/:id/edit', async function(req, res, next) {
  try {
    console.log(req.params.id)

    let id = req.params.id;

    const proposito = await Proposito.findByPk(id);

    console.log(proposito);

    res.render('propositos/new', { proposito, edit: true });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});


//DELETE Delete
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const proposito = await Proposito.findByPk(id);
  
    await proposito.destroy();
  
    res.send(proposito);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;
