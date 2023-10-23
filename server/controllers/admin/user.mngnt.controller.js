const { catchAsync } = require("../../utils/errors/catchAsync");
const User = require("../../models/users.model");

module.exports = {
    getAllUsers: catchAsync( async (req,res) => {
        const users = await User.find({role: 'user'});
        return res.status(200).json({ error: false, msg: 'Successfull', users});
    }),
    accountStatus: catchAsync( async (req,res) => {
        const userEmail = req.params.email;
        const status = req.query.status;

        const user = await User.findOne(userEmail);
        if(!user) return res.status(404).json({ error: true, msg: 'User not found with provided email'});

        await User.findOneAndUpdate({email: userEmail}, {$set:{status}});
        return res.status(200).json({ error: false, msg: 'Status updated successfully'});
    })
}