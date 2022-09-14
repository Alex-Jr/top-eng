
var express = require('express');
const { Diretriz, Proposito } = require('../models');
var router = express.Router();
var crypto = require('crypto')


/* GET diretriz index */
router.get('/', async function(req, res, next) {
  try {
    const diretrizes = await Diretriz.findAll({ raw: true, where: req.query })
    res.render('diretrizes/index', { diretrizes });
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
      const diretriz = await Diretriz.findByPk(req.body.id);

      const parsedBody = { ...req.body };

      delete parsedBody.id;
      delete parsedBody.edit;

      await diretriz.update(parsedBody);
      res.redirect('/diretrizes');
    } else {
      const diretriz = await Diretriz.create(req.body);
    
      res.redirect('/diretrizes');
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET new
router.get('/new', async function(req, res, next) {
  try {
    const propositos = await Proposito.findAll();
    res.render('diretrizes/new', { propositos, edit: false });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET ID
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const diretriz = await Diretriz.findByPk(id);
    res.send(diretriz);
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

    const diretriz = await Diretriz.findByPk(id);

    const propositos = await Proposito.findAll();

    console.log(diretriz);

    res.render('diretrizes/new', { propositos, diretriz, edit: true });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});


//DELETE Delete
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const diretriz = await Diretriz.findByPk(id);
  
    await diretriz.destroy();
  
    res.send(diretriz);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;
