const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(
            "mongodb+srv://mubi:131918@clients.gtpemzq.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log("Database connected");
    } catch (error) {
        console.log(`Error :${error}`);
        process.exit();
    }
};

module.exports = connectDB;