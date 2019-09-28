import mongoose from 'mongoose';
import {StudentSchema} from '../models/student.model';
import {CourseRegistrationSchema} from '../models/courseRegistration.model';
import { read } from 'fs';

const Student = mongoose.model('Student', StudentSchema);
const CourseRegistration = mongoose.model('CourseRegistration', CourseRegistrationSchema);


export const addNewStudent = (req, res) => {
    let newStudent = new Student(req.body);

    newStudent.save((err, student) => {
        if(err) {
            res.send(err);
        }

        res.json(student);
    });
};

export const getStudents = (req, res) => {
    Student.find({}, (err, student) => {
        if(err){
            res.send(err);
        }

        res.json(student);
    });
};

export const getStudentWithId = (req, res) => {
        res.status(200).json(req.student);
};

export const updateStudent = (req, res) => {
    Student.findOneAndUpdate({_id: req.params.studentId}, 
        req.body, {new : true},
        (err, student) => {
            if(err){
                res.send(err);
            }
    
            res.json(student);
        });
};

export const getByStudentId = (req, res, next, studentId) => {
    Student.findById(studentId, (err, student) => {
        if(err){
            res.status(400).send(err);
        }

        req.student = student;
        next();
    });
};

export const loadStudent = (req, res, next) => {

    if(!req.body.studentId){
        res.status(404).send({
            success: 'false',
            message: 'studentId it is required',
        });
    }

    getByStudentId(req, res, next, req.body.studentId);
};

export const getCoursesByStudent = (req, res) => {
       
    CourseRegistration.find({student: req.student._id})
    .populate('course')
    .exec((err, registrations) => {
        if(err){
            res.status(400).send(err);
        }

        let dataResult = {
            student : req.student,
            courses : []
        };
        registrations.forEach(function(registration) {            
            dataResult.courses.push(registration.course);            
        });        
        res.status(200).json(dataResult);
    });
}






