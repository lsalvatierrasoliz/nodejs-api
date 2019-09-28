import { updateCourse, 
    getCoursetWithId, 
    addNewCourse, 
    getCourses,
    getByCourseCode,
    getStudentsByCourse,
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

    app.param('code', getByCourseCode);

}

export default routes;
