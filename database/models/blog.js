const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseTimeZone = require('mongoose-timezone');

mongoose.plugin(mongooseTimeZone);

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    created_by: {
        type: String,
        required: false,
        default: null,
    },
    updated_by: {
        type: String,
        required: false,
        default: null,
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        timezone: 'Asia/Kolkata'
    },
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;