var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var login = require('./routes/login');
var blog = require('./routes/blog')
var signup = require('./routes/signup');

var app = express();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




//sequelize set up
const sequelize = require('./sequelize');
const User = require('./model/user')  
const News = require('./model/blog')


// Synchronize models with the database
sequelize.sync().then((data) => {
  // console.log("data",data)
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing database:', error);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', login);
app.use('/blog', blog)
app.use('/signup', signup);

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

module.exports = app;
