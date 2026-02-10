//import dependencies
import express from 'express';
import morgan from 'morgan';
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

//create express
const app = express();
//use all environ. variables in .env file
const PORT = process.env.PORT || 3000;
//tells server what environment currently under
const environment = process.env.NODE_ENV;

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//connect router to main application
app.use('/api/posts', postRoutes);
app.use('/categories', categoryRoutes);

//404 middleware if cant be found by existing routes
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  //calls the next middleware
  next(err);
});

//replace default express error handler to centralized error handler
app.use((err, req, res, next) => {
  //print stack trace
  console.log(err.stack);
  //see what error exists
  if (!err.status) {
    //default to 500
    err.status = 500;
    err.message = 'Internal Server Error';
  }
  res.status(err.status).json({ error: err.message });
});

if (environment !== 'test') {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

export default app;
