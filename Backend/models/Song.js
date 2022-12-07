const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a name'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    artist: {
        type: String,
        required: [true, 'Please add an artist name'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating can not be greater than 10']
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Song', SongSchema)