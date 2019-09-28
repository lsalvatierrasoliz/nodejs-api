import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseRegistrationSchema = new Schema({
    
    student: {
        type: Schema.Types.ObjectId, 
        ref: 'Student'
    },
    course: {
        type: Schema.Types.ObjectId, 
        ref: 'Course'
    },
    registeredAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CourseRegistration', CourseRegistrationSchema);