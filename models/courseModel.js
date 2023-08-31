const mongoose = require('mongoose');
const slugify = require('slugify');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A course must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        100,
        'A course name must have less or equal to 100 characters',
      ],
      minlength: [10, 'A course name must have more or equal to 10 characters'],
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'A course must have a description'],
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    duration: {
      type: String,
      required: [true, 'A course must have a duration'],
    },
    instructors: {
      type: [String],
    },
    isB2B: {
      type: Boolean,
      default: false,
    },
    leadDomain: {
      type: String,
      trim: true,
      required: [true, 'A course must be part of a domain'],
    },
    topics: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

courseSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
