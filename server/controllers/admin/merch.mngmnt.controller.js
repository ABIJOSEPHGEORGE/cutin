const User = require("../../models/users.model");
const catchAsync = require("../../utils/errors/catchAsync");

module.exports = {
    getAllMerchants: catchAsync( async(req, res) => {
        const merchants = await User.find({ role: 'merchant'});
        return res.status(200).json({ error: false, msg: 'Successfull', merchants});
    }),
    accountStatus: catchAsync( async(req, res) => {
        const merchEmail = req.params.email;
        const status = req.query.status;

        const user = await User.findOne(merchEmail);
        if(!user) return res.status(404).json({ error: true, msg: 'User not found with provided email'});

        await User.findOneAndUpdate({email: merchEmail}, {$set:{status}});
        return res.status(200).json({ error: false, msg: 'Status updated successfully'});
    })
}