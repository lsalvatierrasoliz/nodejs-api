import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routesStudent from './src/routes/student.routes';
import routesCourse from './src/routes/course.routes';
import routesRegistration from './src/routes/courseRegistration.route';
import config from './src/config/config';


const app = express();
const PORT = process.env.PORT || config.application.port;


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/universityDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
// handler errors
app.use((err, req, res, next) => {  
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


// routes init
routesStudent(app);
routesCourse(app);
routesRegistration(app);



app.get('/', (req, res) => 
  res.send(`Node and express server is running in port ${PORT}`)
);

app.listen(PORT,  () => 
  console.log(`your server is running on port ${PORT}`)
);