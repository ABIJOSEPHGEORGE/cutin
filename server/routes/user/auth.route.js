const { Router } = require('express');
const controller = require('../../controllers/user/auth.controller');

const route = Router();

route.post('/signup', controller.signup);
route.post('/sigin', controller.signin);
route.post('/forget-password', controller.forgotPassword);


module.exports = route;