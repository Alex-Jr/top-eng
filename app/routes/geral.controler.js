var express = require('express');
const { Proposito } = require('../models');
var router = express.Router();

/* GET proposito index */
router.get('/', async function(req, res, next) {
  try {
    const propositos = await Proposito.findAll({ raw: true, where: req.query })
    res.render('geral/index', { propositos });
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;