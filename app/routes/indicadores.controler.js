
var express = require('express');
const { Indicador, Objetivo } = require('../models');
var router = express.Router();
var crypto = require('crypto')


/* GET indicador index */
router.get('/', async function(req, res, next) {
  try {
    const indicadores = await Indicador.findAll({ raw: true, where: req.query })
    res.render('indicadores/index', { indicadores });
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
      const indicador = await Indicador.findByPk(req.body.id);

      const parsedBody = { ...req.body };

      delete parsedBody.id;
      delete parsedBody.edit;

      await indicador.update(parsedBody);
      const pId = req.query.proposito;
      res.redirect(pId ? `/propositos/${pId}/geral` : '/indicadores');
    } else {
      const indicador = await Indicador.create(req.body);
    
      res.redirect('/indicadores');
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET new
router.get('/new', async function(req, res, next) {
  try {
    const objetivos = await Objetivo.findAll();
    res.render('indicadores/new', { objetivos, edit: false });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET ID
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const indicador = await Indicador.findByPk(id);
    res.send(indicador);
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

    const indicador = await Indicador.findByPk(id);

    console.log(indicador);

    const objetivos = await Objetivo.findAll();

    res.render('indicadores/new', { objetivos, indicador, edit: true });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});


//DELETE Delete
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const indicador = await Indicador.findByPk(id);
  
    await indicador.destroy();
  
    res.send(indicador);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;
