const express = require('express');
const syllabusController = require('../controllers/syllabusController');

const router = express.Router();

router
  .route('/')
  .get(syllabusController.getAllSyllabus)
  .post(syllabusController.createSyllabus);

module.exports = router;
