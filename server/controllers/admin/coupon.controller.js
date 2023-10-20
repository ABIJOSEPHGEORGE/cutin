//Admin Coupon Management
const Coupon = require("../../models/coupon.model");
const { catchAsync } = require("../../utils/errors/catchAsync");

module.exports = {
    createCoupon: catchAsync(async(req, res) => {
        const {coupon_code, valid_to } = req.body;

        const isExist = await Coupon.findOne({coupon_code});
        if(isExist) return res.status(409).json({error: true, msg: 'Coupon code already exist, try another code'});

        if(valid_to < new Date()) return res.status(400).json({error: true, msg: 'Invalid expiry date, Please provide a valid expiry date'});
        const coupon = await Coupon.create(req.body);
        return res.status(201).json({error: false, msg: 'Coupon created successfully', coupon});
        
    }),

    updateCoupon: catchAsync(async(req, res) => {
        const {coupon_code, valid_to } = req.body;

        console.log(req.body)

        const isExist = await Coupon.findOne({coupon_code});
        if(!isExist) return res.status(409).json({error: true, msg: 'Coupon code doesn`t exist'});

        if(valid_to < new Date()) return res.status(400).json({error: true, msg: 'Invalid expiry date, Please provide a valid expiry date'});

        const coupon = await Coupon.findOneAndUpdate({coupon_code}, req.body);
        return res.status(200).json({error: false, msg: 'Coupon updated successfully', coupon});

    }),

    deleteCoupon: catchAsync(async (req, res) => {
        const coupon_code = req.params.id;
        const isExist = await Coupon.findOne({coupon_code});
        if(!isExist) return res.status(409).json({error: true, msg: 'Coupon code doesn`t exist'});

        await Coupon.deleteOne({coupon_code});
        return res.status(200).json({error: false, msg: 'Coupon deleted successfully'});
    }),

    getCoupon: catchAsync( async(req, res) => {
        const coupon_code = req.params.id;

        const isExist = await Coupon.findOne({coupon_code});
        if(!isExist) return res.status(409).json({error: true, msg: 'Coupon code doesn`t exist'});

        const coupon = await Coupon.findOne({coupon_code});
        return res.status(200).json({error: false, msg: 'Successfull', coupon});
    }),

    getAllCoupon: catchAsync( async (req, res) => {
        const coupons = await Coupon.find({});
        return res.status(200).json({error: false, msg: 'Successfull', coupons});
    }),
}