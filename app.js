var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var battleRouter = require('./routes/battleRouter')
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
app.use('/users', usersRouter);
app.use('/battle',battleRouter)
app.get('/starter/:id',(req,res) => {
  console.log(req.params.id)
  axios.get( `https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
  .then( resp => {
    //console.log(resp)
    res.render('pokemon',{pokemon:resp.data})
  }).catch( err => res.send('NotFound'))
})
app.get('/starter',(req,res) => {
  let id_1  = axios.get( `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 735)}`)
  let id_2  = axios.get( `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 735)}`)
  let id_3  = axios.get( `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 735)}`)
  axios.all([id_1,id_2,id_3])
    .then(axios.spread((...response) => {
      let pokemon = [response[0].data,
      response[1].data,
      response[2].data]
      res.render('starter',{pokemon:pokemon})
    })).catch( err => res.send('NotFound'))
})
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
app.listen(3000)
module.exports = app;
