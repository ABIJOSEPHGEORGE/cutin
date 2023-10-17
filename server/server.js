const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');

const adminAuthRoute = require('./routes/admin/auth.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(cors({origin:process.env.ADMIN_CLIENT}))

//routes
app.use('/api/v1/admin/auth',adminAuthRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started at port ${port}`));