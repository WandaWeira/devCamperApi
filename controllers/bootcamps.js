//@description: Get all bootcamps
//@route : GET /api/v1/bootcamps
//@access: Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all bootcamps" });
};

//@description: Get single bootcamp
//@route : GET /api/v1/bootcamps/:id
//@access: Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get a bootcamp of id ${req.params.id}` });
};

//@description: Create a bootcamp
//@route : POST /api/v1/bootcamps
//@access: Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
};

//@description: Update a bootcamp
//@route : PUT /api/v1/bootcamps/:id
//@access: Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

//@description: Delete a bootcamp
//@route : DELETE /api/v1/bootcamps/:id
//@access: Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp of id ${req.params.id}` });
};
