const Song = require('../models/Song')

// @desc      Get all songs
// @route     GET /api/v1/songs
// @access    Public 
exports.getSongs = async (req, res, next) => {
    try {
        let query;

        // Copy req.query
        const reqQuery = { ...req.query };

        // Fields to exclude
        const removeFields = ['select', 'sort']

        // Loop over removeFields and delete from reqQuery
        removeFields.forEach(param => delete reqQuery[param]);

        console.log(reqQuery);

        // Create Query String
        let queryStr = JSON.stringify(reqQuery);

        // Create operatators {$dt, $gte, etc.}
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
        console.log(queryStr);

        // Finding resource
        query = Song.find(JSON.parse(queryStr));

        // Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = query.select(fields);
        }

        // Sort
        if (req.query.sort) {
            const sortBy = req.query.select.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdat');
        }

        // Executing query
        const songs = await query;
        res.status(200).json({
            success: true,
            count: songs.length,
            data: songs
        });
    } catch (error) {
        next(error);
    }
}

// @desc      Get single song
// @route     GET /api/v1/songs/:id
// @access    Public 
exports.getSong = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: song
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false
        // });
        next(error);
    }
}

// @desc      Create new song
// @route     POST /api/v1/songs
// @access    Private
exports.createSong = async (req, res, next) => {
    try {
        const song = await Song.create(req.body);

        res.status(201).json({
            success: true,
            data: song
        });
    } catch (error) {
        next(error);
    }
}

// @desc      Update new song
// @route     PUT /api/v1/songs/:id
// @access    Private
exports.updateSong = async (req, res, next) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if (!song) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: song
        })
    } catch (error) {
        next(error);
    }
}

// @desc      Delete song
// @route     DELETE /api/v1/songs/:id
// @access    Private
exports.deleteSong = async (req, res, next) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
    
        if (!song) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        next(error);
    }
}