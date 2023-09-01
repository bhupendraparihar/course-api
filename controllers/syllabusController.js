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
  const newSyllabus = await Syllabus.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      syllabus: newSyllabus,
    },
  });
});

exports.getSyllabus = catchAsync(async (req, res, next) => {
  const syllabus = await Syllabus.findById(req.params.id);

  if (!syllabus) {
    return next(
      new AppError(`No syllabus found with ID: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      syllabus,
    },
  });
});

exports.updateSyllabus = catchAsync(async (req, res, next) => {
  const syllabus = await Syllabus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!syllabus) {
    return next(
      new AppError(`No syllabus found with ID: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      syllabus,
    },
  });
});

exports.deleteSyllabus = catchAsync(async (req, res, next) => {
  const syllabus = await Syllabus.findByIdAndDelete(req.params.id);

  if (!syllabus) {
    return next(
      new AppError(`No Syllabus found with ID: ${req.params.id}`, 404)
    );
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
