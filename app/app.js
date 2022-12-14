var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var propositosRouter = require('./routes/propositos.controler');
var diretrizesRouter = require('./routes/diretrizes.controler');
var objetivosRouter = require('./routes/objetivos.controler');
var indicadorRouter = require('./routes/indicadores.controler');
var geralRouter = require('./routes/geral.controler');
const { sequelize } = require('./models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/propositos', propositosRouter);
app.use('/diretrizes', diretrizesRouter)
app.use('/objetivos', objetivosRouter);
app.use('/indicadores', indicadorRouter)
app.use('/geral', geralRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelize.sync()

module.exports = app;
