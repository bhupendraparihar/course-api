const Syllabus = require('../models/syllabusModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllSyllabus = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Syllabus.find(), req.query);

  const syllabus = await features.query;

  console.log(syllabus);
  res.status(200).json({
    status: 'success',
    results: syllabus.length,
    data: {
      syllabus,
    },
  });
});

exports.createSyllabus = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newSyllabus = await Syllabus.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      syllabus: newSyllabus,
    },
  });
});
