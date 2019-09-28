import mongoose from 'mongoose';
import {CourseSchema} from '../models/course.model';
import {CourseRegistrationSchema} from '../models/courseRegistration.model';


const Course = mongoose.model('Course', CourseSchema);
const CourseRegistration = mongoose.model('CourseRegistration', CourseRegistrationSchema);

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
    res.status(200).json(req.course);
};

export const updateCourse = (req, res) => {
    Course.findOneAndUpdate({_id: req.params.code}, 
        req.body, {new : true},
        (err, course) => {
            if(err){
                res.status(400).send(err);
            }
    
            res.status(201).json(course);
        });
};

export const getByCourseCode = (req, res, next, code) => {
    Course.findOne({code:code}, (err, course) => {
        if(err){
            next(err);
        }

        if(!course){
            const err = new Error("Course not found");
            err.status = 404;
            next(err);
        }

        req.course = course;
        next();

    });
};

export const getStudentsByCourse = (req, res) => {
       
    CourseRegistration.find({course: req.course._id})
    .populate('student')
    .exec((err, registrations) => {
        if(err){
            res.status(400).send(err);
        }

        let dataResult = {
            course : req.course,
            students : []
        };
        registrations.forEach(function(registration) {            
            dataResult.students.push(registration.student);            
        });        
        res.status(200).json(dataResult);
    });
};

export const deleteStudentFromCourse = (req, res) => {
    CourseRegistration.deleteOne({course: req.course._id, student:req.params.studentId}, (err) => {
        if(err){
            res.status(400).send(err);
        }

        res.status(204).send({
            operation : 'successfully deleted'
        });
    });
};







