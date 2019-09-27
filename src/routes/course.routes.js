import { updateCourse, 
    getCoursetWithId, 
    addNewCourse, 
    getCourses,
 } from "../controllers/course.controller";

const routes = (app) => {
    app.route('/api/v1/courses')
    .get(getCourses)
    .post(addNewCourse);

    app.route('/api/v1/courses/:courseId')
    .put(updateCourse)
    .get(getCoursetWithId);

}

export default routes;
