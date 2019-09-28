import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    code: String,
    title: String,
    description: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', CourseSchema);

