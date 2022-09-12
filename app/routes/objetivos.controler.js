
var express = require('express');
const { Objetivo } = require('../models');
var router = express.Router();
var crypto = require('crypto')


/* GET objetivo index */
router.get('/', async function(req, res, next) {
  try {
    const objetivos = await Objetivo.findAll({ raw: true, where: req.query })
    res.render('objetivos/index', { objetivos });
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
      const objetivo = await Objetivo.findByPk(req.body.id);

      const parsedBody = { ...req.body };

      delete parsedBody.id;
      delete parsedBody.edit;

      await objetivo.update(parsedBody);
      res.redirect('/objetivos');
    } else {
      const objetivo = await Objetivo.create(req.body);
    
      res.redirect('/objetivos');
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET new
router.get('/new', async function(req, res, next) {
  try {
    res.render('objetivos/new', { edit: false });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

//GET ID
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const objetivo = await Objetivo.findByPk(id);
    res.send(objetivo);
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

    const objetivo = await Objetivo.findByPk(id);

    console.log(objetivo);

    res.render('objetivos/new', { objetivo, edit: true });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});


//DELETE Delete
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const objetivo = await Objetivo.findByPk(id);
  
    await objetivo.destroy();
  
    res.send(objetivo);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;
