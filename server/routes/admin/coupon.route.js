const { Router } = require('express');
const controller = require('../../controllers/admin/coupon.controller');

const route = Router();

route.get('/coupons', controller.getAllCoupon);
route.get('/coupon/:id', controller.getCoupon);

route.post('/coupon', controller.createCoupon);

route.put('/coupon', controller.updateCoupon);

route.delete('/coupon/:id', controller.deleteCoupon);

module.exports = route;