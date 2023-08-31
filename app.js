const express = require('express');

const courseRouter = require('./routes/courseRoutes');
const syllabusRouter = require('./routes/syllabusRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/syllabus', syllabusRouter);

module.exports = app;
