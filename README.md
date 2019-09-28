# nodejs-api
Basic Restful API about students and classes
# Technologies
NodeJS, ExpressJS, MongoDB

# End-points
// Students Resource

GET http://127.0.0.1:3000/api/v1/students (get all students in system)
GET http://127.0.0.1:3000/api/v1/students/:studentId (get a student by id)
PUT http://127.0.0.1:3000/api/v1/students/:studentId (update a student)
POST http://127.0.0.1:3000/api/v1/students (create a new student)
GET http://127.0.0.1:3000/api/v1/students/:studentId/courses (get all course for student)

// Course Resource

GET http://127.0.0.1:3000/api/v1/courses (get all courses in system)
GET http://127.0.0.1:3000/api/v1/courses/:code (get a course by code)
PUT http://127.0.0.1:3000/api/v1/courses/:code (update a course)
POST http://127.0.0.1:3000/api/v1/courses (create a new course)
GET http://127.0.0.1:3000/api/v1/courses/:code/students (get all courses for student)
DELETE http://127.0.0.1:3000/api/v1/courses/:code/students/:studentId (delete a student from a course)

// Registration
POST http://127.0.0.1:3000/api/v1/courses/:code/registrations (register student to a course, need studentId as request body)

   
 
