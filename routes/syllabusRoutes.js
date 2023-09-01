const express = require('express');
const syllabusController = require('../controllers/syllabusController');

const router = express.Router();

router
  .route('/')
  .get(syllabusController.getAllSyllabus)
  .post(syllabusController.createSyllabus);

router
  .route('/:id')
  .get(syllabusController.getSyllabus)
  .patch(syllabusController.updateSyllabus)
  .delete(syllabusController.deleteSyllabus);

module.exports = router;
