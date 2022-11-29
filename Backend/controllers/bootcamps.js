const Bootcamp = require('../models/Bootcamp')

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public 
exports.getBootcamps = async (req, res, next) => {
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
        query = Bootcamp.find(JSON.parse(queryStr));

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
        const bootcamps = await query;
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
    } catch (error) {
        next(error);
    }
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public 
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        // res.status(400).json({
        //     success: false
        // });
        next(error);
    }
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        next(error);
    }
}

// @desc      Update new bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if (!bootcamp) {
            return res.status(400).json({
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        next(error);
    }
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if (!bootcamp) {
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