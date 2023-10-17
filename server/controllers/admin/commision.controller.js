const Commission = require("../../models/commission.model");
const catchAsync = require("../../utils/errors/catchAsync");

//Admin Commision Controller
module.exports = {
    getCommision: catchAsync(async(req, res) => {
        return await Commission.findOne({});
    }),
    updateCommison: catchAsync((req, res) => {
        
    })
}