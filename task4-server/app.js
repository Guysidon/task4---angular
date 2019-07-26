var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const URL = 'mongodb://localhost:27017/persons';
mongoose.connect(URL, { useNewUrlParser: true })

var indexRouter = require('./routes/index');
var peropleRouter = require('./routes/people');
var tasksRouter = require('./routes/tasks');


var app = express();
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/people', peropleRouter);
app.use('/tasks', tasksRouter);


module.exports = app;
