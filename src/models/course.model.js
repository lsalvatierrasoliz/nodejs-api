import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    code: String,
    title: String,
    description: String
});

module.exports = mongoose.model('Course', CourseSchema);

