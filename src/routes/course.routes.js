import { updateCourse, 
    getCoursetWithId, 
    addNewCourse, 
    getCourses,
    getByCourseCode,
    getStudentsByCourse,
    deleteStudentFromCourse,
 } from "../controllers/course.controller";

const routes = (app) => {
    app.route('/api/v1/courses')
    .get(getCourses)
    .post(addNewCourse);

    app.route('/api/v1/courses/:code')
    .put(updateCourse)
    .get(getCoursetWithId);

    app.route('/api/v1/courses/:code/students')
    .get(getStudentsByCourse);
    
    app.route('/api/v1/courses/:code/students/:studentId')
    .delete(deleteStudentFromCourse);  
    
    app.param('code', getByCourseCode);

}

export default routes;
