import { registerStudentToCourse,
 } from "../controllers/courseRegistration.controller";

 import {getByStudentId} from "../controllers/student.controller"

const routes = (app) => {
    app.route('/api/v1/courses/:code/registrations')
    .post((req, res, next) => {
        if(!req.body.studentId){
            res.status(404).send({
                success: 'false',
                message: 'studentId it is required',
            });
        }
        getByStudentId(req, res, next, req.body.studentId);

    }, registerStudentToCourse);    
}

export default routes;
