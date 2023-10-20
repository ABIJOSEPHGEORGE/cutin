const mongoose = require('mongoose');

module.exports = {
    connectDB: async () => {
        try {
            await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
            console.log('Database connected successfully');
        } catch (error) {
            console.log(error);
        }
    }
}