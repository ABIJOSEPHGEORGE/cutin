const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');

const adminAuthRoute = require('./routes/admin/auth.route');
const couponRoute = require('./routes/admin/coupon.route');
const { connectDB } = require('./config/db.config');

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(cors({origin:process.env.ADMIN_CLIENT}))

//routes
const routeBaseUrl = '/api/v1/admin'
app.use(`${routeBaseUrl}/auth`,adminAuthRoute);
app.use(`${routeBaseUrl}/coupon-management`, couponRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started at port ${port}`));