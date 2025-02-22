const Patient = require("../models/patient.model");

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Patient created successfully",
        patient,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get patient details by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate(
      "userId providerId"
    );
    if (!patient)
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });

    res.status(200).json({ success: true, patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update patient health data (steps, activityTime, sleep)
exports.updateHealthData = async (req, res) => {
  try {
    const { steps, activityTime, sleep } = req.body;
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { steps, activityTime, sleep },
      { new: true }
    );

    if (!patient)
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });

    res
      .status(200)
      .json({ success: true, message: "Health data updated", patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient)
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });

    res
      .status(200)
      .json({ success: true, message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
