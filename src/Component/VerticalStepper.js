import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

const steps = [
  {
    label: "Application Submitted",
    description: `Processing time: 1-2 business days`,
  },
  {
    label: "Manual Verification",
    description: `Processing time: 1-2 business days`,
  },
  {
    label: "TPN verification",
    description: "Processing time: 1-2 business days.",
  },
  {
    label: "Request personal Information",
    description: `Processing time: 1-2 business days`,
  },
  {
    label: "Decline/ Approve",
  },
  {
    label: "Assign Property manager",
  },
  {
    label: "Invite Tenant",
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const { applicationStatus } = useParams();
  const cookies = new Cookies();
  const [applications, setApplications] = React.useState([]);
  React.useEffect(() => {
    if (applicationStatus === "submitted") {
      setActiveStep(0);
    } else if (applicationStatus === "manualVerify") {
      setActiveStep(1);
    } else if (applicationStatus === "tpn") {
      setActiveStep(2);
    } else if (applicationStatus === "requestInfo") {
      setActiveStep(3);
    } else if (
      applicationStatus === "rejected" ||
      applicationStatus === "accepted"
    ) {
      setActiveStep(4);
    } else if (applicationStatus === "assign-agent") {
      setActiveStep(5);
    } else if (applicationStatus === "invite-tenant") {
      setActiveStep(6);
    }
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {/* <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
