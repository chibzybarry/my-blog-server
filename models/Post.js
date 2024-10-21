const mongoose = require('mongoose');

// post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    postImg: {
        type: String,
        default: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/How%20To%20Post%20on%20IG.jpg"
    },
    category: String,
    tags: [String],
    likes: {
        type: Number,
        default: 0
    },
    postDate: {
        type: Date,
        default: Date.now
    }
}, timestamps = true);

module.exports = mongoose.model('Post', postSchema);