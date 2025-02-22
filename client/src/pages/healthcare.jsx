import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";

const sampleData = [
  {
    name: "Vishnu",
    details: {
      goalMet: "Yes",
      stepsGoal: "5000 steps",
      sleep: "8 hours",
      checkup: "Taken on 20 Feb 2025",
    },
  },
  {
    name: "Parmesh",
    details: {
      goalMet: "No",
      stepsGoal: "3000 steps",
      sleep: "6 hours",
      checkup: "Taken on 18 Feb 2025",
    },
  },
  {
    name: "Harshita",
    details: {
      goalMet: "Yes",
      stepsGoal: "7000 steps",
      sleep: "7 hours",
      checkup: "Taken on 22 Feb 2025",
    },
  },
  {
    name: "Sujith",
    details: {
      goalMet: "No",
      stepsGoal: "4000 steps",
      sleep: "5 hours",
      checkup: "Taken on 15 Feb 2025",
    },
  },
];

export default function HealthcareProviderPage() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
        Health Care Provider Page
      </Typography>
      {sampleData.map((person, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? <RemoveIcon /> : <ExpandMoreIcon />
            }
          >
            <Typography>{person.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography>Goal Met: {person.details.goalMet}</Typography>
              <Typography>Steps Goal: {person.details.stepsGoal}</Typography>
              <Typography>Sleep: {person.details.sleep}</Typography>
              <Typography>Checkup: {person.details.checkup}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
