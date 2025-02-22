import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import PatientDashboard from "./patientDashboard";

jest.mock("axios");

const mockPatientData = {
  patient: {
    steps: 5000,
    activityTime: "2 hours",
    sleep: "7 hours",
  },
};

describe("PatientDashboard Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.setItem("patientId", "test-patient-id");
  });

  test("displays loading indicator initially", () => {
    render(<PatientDashboard />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("fetches and displays patient data correctly", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPatientData });

    render(<PatientDashboard />);

    expect(await screen.findByText("Steps")).toBeInTheDocument();
    expect(await screen.findByText("5000")).toBeInTheDocument();
    expect(await screen.findByText("Active Time")).toBeInTheDocument();
    expect(await screen.findByText("2 hours")).toBeInTheDocument();
    expect(await screen.findByText("Sleep")).toBeInTheDocument();
    expect(await screen.findByText("7 hours")).toBeInTheDocument();
  });

  test("handles API error gracefully", async () => {
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<PatientDashboard />);

    await waitFor(() =>
      expect(
        screen.getByText("Failed to load data. Please try again.")
      ).toBeInTheDocument()
    );
  });

  test("displays upcoming reminders", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPatientData });

    render(<PatientDashboard />);

    await waitFor(() =>
      expect(screen.getByText("Upcoming Reminders")).toBeInTheDocument()
    );

    expect(screen.getByText(/Drink Water/i)).toBeInTheDocument();
    expect(screen.getByText(/Workout/i)).toBeInTheDocument();
    expect(screen.getByText(/Take Medicine/i)).toBeInTheDocument();
  });
});
