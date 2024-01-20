const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseTimeZone = require('mongoose-timezone');

mongoose.plugin(mongooseTimeZone);

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        timezone: 'Asia/Kolkata',
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;