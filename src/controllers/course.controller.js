import mongoose from 'mongoose';
import {CourseSchema} from '../models/course.model';

const Course = mongoose.model('Course', CourseSchema);

export const addNewCourse = (req, res) => {
    let newCourse = new Course(req.body);

    newCourse.save((err, course) => {
        if(err) {
            res.status(400).send(err);
        }

        res.status(201).json(course);
    });
};

export const getCourses = (req, res) => {
    Course.find({}, (err, course) => {
        if(err){
            res.status(400).send(err);
        }

        res.status(200).json(course);
    });
};

export const getCoursetWithId = (req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
        if(err){
            res.status(400).send(err);
        }

        res.status(200).json(course);
    });
};

export const updateCourse = (req, res) => {
    Student.findOneAndUpdate({_id: req.params.courseId}, 
        req.body, {new : true},
        (err, course) => {
            if(err){
                res.status(400).send(err);
            }
    
            res.status(201).json(course);
        });
};



