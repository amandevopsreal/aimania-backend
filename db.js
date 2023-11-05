const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/aimainia";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(console.log("Connected To Mongo Successfully"));
}

module.exports = connectToMongo;