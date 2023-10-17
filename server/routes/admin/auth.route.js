// Admin Auth Routes
const { Router } = require('express');
const controller = require('../../controllers/admin/auth.controller');

const route = Router();

route.post('/signin', controller.signin);

module.exports = route;