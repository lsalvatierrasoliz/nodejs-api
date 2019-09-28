import mongoose from 'mongoose';

import {CourseRegistrationSchema} from '../models/courseRegistration.model';
import {CourseSchema} from '../models/course.model';
import {StudentSchema} from '../models/student.model';

const CourseRegistration = mongoose.model('CourseRegistration', CourseRegistrationSchema);
const Course = mongoose.model('Course', CourseSchema);
const Student = mongoose.model('Student', StudentSchema);

export const registerStudentToCourse = (req, res) => {
        
    let newCourseRegistration = new CourseRegistration({
        student : req.student._id,
        course : req.course._id
    });

    newCourseRegistration.save((err, rCourse) => {

        if(err){
            res.status(400).send(err);
        }

        res.status(201).json(rCourse);
    });
};

export const getRegistrationWithId = (req, res) => {

    CourseRegistration.findById(req.params.registrationId)
    .populate('student')
    .exec((err, registration) => {
        if(err){
            res.status(400).send(err);
        }

        res.status(200).json(registration);
    });
};