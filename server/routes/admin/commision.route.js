const { Router } = require('express');
const controller = require('../../controllers/admin/commision.controller');

const route = Router();

route.get('/commision', controller.getCommision);
route.put('/commision', controller.updateCommison);

module.exports = route;