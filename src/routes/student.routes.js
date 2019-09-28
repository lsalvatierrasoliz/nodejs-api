import { runInNewContext } from "vm";
import { addNewStudent, 
    getStudents, 
    getStudentWithId, 
    updateStudent,
    getByStudentId,
    getCoursesByStudent,
} from "../controllers/student.controller";

const routes = (app) => {
    app.route('/api/v1/students')
    .get(getStudents)
    .post(addNewStudent);

    app.route('/api/v1/students/:studentId')
    .put(updateStudent)
    // get specific contact
    .get(getStudentWithId);

    app.route('/api/v1/students/:studentId/courses')
    .get(getCoursesByStudent);
 
    app.param('studentId', getByStudentId);

}

export default routes;