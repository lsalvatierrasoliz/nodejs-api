import mongoose from 'mongoose';
import {StudentSchema} from '../models/student.model';

const Student = mongoose.model('Student', StudentSchema);

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
    Student.findById(req.params.studentId, (err, student) => {
        if(err){
            res.send(err);
        }

        res.json(student);
    });
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


// export const deleteStudent = (req, res) => {
//    Student.deleteOne({_id:req.params.contactId}, function(err){
//        if(err){
//            res.send(err);
//        }

//        res.json({message : 'Successfully deleted contact'});
//    });
// };


