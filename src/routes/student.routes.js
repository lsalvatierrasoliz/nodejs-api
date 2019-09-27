import { runInNewContext } from "vm";
import { addNewStudent, 
    getStudents, 
    getStudentWithId, 
    updateStudent,
} from "../controllers/student.controller";

const routes = (app) => {
    app.route('/api/v1/students')
    .get(getStudents)
    // POST endpoint
    .post(addNewStudent);

    app.route('/api/v1/students/:studentId')
    .put(updateStudent)
    // delete specific student
    //.delete(deleteStudent)
    // get specific contact
    .get(getStudentWithId);

}

export default routes;