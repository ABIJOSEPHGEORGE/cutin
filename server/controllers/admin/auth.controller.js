// Admin Auth Controller
const { catchAsync } = require("../../utils/errors/catchAsync");
const jwt = require('jsonwebtoken');

module.exports = {
    signin: catchAsync((req, res) => {
        const { email, password } = req.body;
        console.log(email,password)
        //checking whether the username is valid
        if(email === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            const payload = { email: process.env.ADMIN_USERNAME };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY});
            return res.status(200).json({error:false, msg: 'Authentication successfull', token});
        }

        return res.status(200).json({error: true, msg: 'Invalid username or password.'});
    })
};