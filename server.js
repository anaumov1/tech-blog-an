const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const serverRoutes = require('./controllers');
const helpers = require('./utils/helpers');
