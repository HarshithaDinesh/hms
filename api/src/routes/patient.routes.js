const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller");

router.post("/", patientController.createPatient);
router.get("/:id", patientController.getPatientById);
router.put("/:id/health", patientController.updateHealthData);
router.delete("/:id", patientController.deletePatient);

module.exports = router;
