const User = require("../../models/users.model");
const { catchAsync } = require("../../utils/errors/catchAsync");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//TODO: input validation

module.exports = {
    signin: catchAsync(async (req, res) => {
        const { email, password } = req.body;

        const isExist = await User.findOne({email});
        if(!isExist) return res.status(401).json({ error: true, msg: 'Invalid email or password, Please try again...'});

        const comparePassword = await bcrypt.compare(isExist.password, password);
        if(!comparePassword) return res.status(401).json({ error: true, msg: 'Invalid email or password, Please try again...'});
        const payload = { user: email, role: 'user'};
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY});

        return res.status(200).json({ error: false, msg: 'Authentication Successfull', token});             
    }),

    signup: catchAsync( async () => {
        const {firs_name, last_name, email, password, mobile} = req.body;
        //TODO: otp verification in email and mobile
        const emailExist = await User.findOne({email});
        if(emailExist) return res.status(409).json({ error: true, msg: 'Email already exist with another user'});

        const mobileExist = await User.findOne({mobile});
        if(mobileExist) return res.status(409).json({ error: true, msg: 'Mobile number already associated with another user'});

        req.body.password = await bcrypt.hash(password,10);
        await User.create(req.body);
        return res.status(201).json({ error: false, msg: 'Account created successfully'});
        
    }),

    forgotPassword: catchAsync( async () => {
        //TODO: OTP verification and complete forgot password
    }),
}