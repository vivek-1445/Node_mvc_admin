const express = require('express');

const route = express.Router();

const homecontroller = require('../controllers/homeController');

route.use('/auth',require('./auth'));

route.get('/',homecontroller.home);

console.log('route is running');

module.exports = route;

