const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./helper/db')();
const indexRouter = require('./routes/index');
const shopRouter = require('./routes/shop');
const detailRouter = require('./routes/detail');
const addproduct = require('./routes/productadd');
const signinRouter = require('./routes/Signin');
const signupRouter = require('./routes/signup');
const blogRouter = require('./routes/blog');
const blogPostRouter = require('./routes/blogpost');
const requestRouter = require('./routes/Request');
const orderRouter = require('./routes/order');
const commentRouter = require('./routes/Comment');
const bodyParser = require('body-parser')
const app = express();
//middleware
const verifytoken = require('./middleware/verifytoken');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use(shopRouter);
app.use(addproduct);
app.use(detailRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(blogRouter);
app.use(blogPostRouter);
app.use(requestRouter);
app.use(verifytoken, orderRouter);
app.use(verifytoken, commentRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
