const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    uses: {
        type: Number,
        required: true,
        default: 0
    }

})
const User = mongoose.model("user", UserSchema)
module.exports = User