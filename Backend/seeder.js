const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Load env vars
dotenv.config({path: './config/config.env'});

// Load models
const Song = require('./models/Song')

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const songs = JSON.parse(fs.readFileSync(`${__dirname}/_data/songs.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Song.create(songs);
        process.exit();
    } catch (error) {
        console.error(err);
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Song.deleteMany();
        process.exit();
    } catch (error) {
        console.error(err);
    }
}

if (process.argv[2] == '-i') {
    importData();
} else if (process.argv[2] == '-d') {
    deleteData();
}