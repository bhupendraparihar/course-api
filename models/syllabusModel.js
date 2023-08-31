const mongoose = require('mongoose');
const slugify = require('slugify');

const syllabusSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Course',
    required: [true, 'every syllabus should have courseId'],
    unique: true,
  },
  modules: [
    {
      title: {
        type: String,
        trim: true,
        required: [true, 'Should have title for every module'],
      },
      topics: [String],
    },
  ],
});

const Syllabus = mongoose.model('Syllabus', syllabusSchema);

module.exports = Syllabus;
