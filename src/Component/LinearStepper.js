import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Application from "../Pages/Application";
import MenuAppBar from "./MenuAppBar";
import ContactPage from "../Pages/ContactPage";
import EmploymentPage from "../Pages/EmploymentPage";
import EmergencyContactPage from "../Pages/EmergencyContactPage";
import UploadDetailsPage from "../Pages/UploadDetailsPage";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import ApplicationCard from "./ApplicationCard";
import CoApplicantPage from "../Pages/CoApplicantPage";

const steps = [
  "Personal Info",
  "Contact Info",
  "Employment Info",
  "Emergency Contact Info",
  "co-applicant Info",
  "Supporting Documents",
];

export default function LinearStepper({ children }) {
  const [housingDetails, setHousingDetails] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [applicationStatus, setApplicationStatus] = React.useState(true);
  const [personalDetailsObj, setPersonalDetailsObj] = React.useState({});
  const [bankDetailsObj, setBankDetailsObj] = React.useState({});
  const [contactInfoObj, setContactInfoObj] = React.useState({});
  const [employmentDetailsObj, setEmploymentDetailsObj] = React.useState({});
  const [emergencyContactDetailsObj, setEmergencyContactDetailsObj] =
    React.useState({});
  const [coApplicantInfoObj, setCoApplicantInfoObj] = React.useState({});
  const [uploadDocumentsObj, setUploadDocumentsObj] = React.useState({});
  const [applicationId, setApplicationId] = React.useState("");
  // const [draftApplication, setDraftApplication] = React.useState([]);

  console.log({
    personalDetailsObj,
    bankDetailsObj,
    contactInfoObj,
    employmentDetailsObj,
    emergencyContactDetailsObj,
    uploadDocumentsObj,
    applicationId,
  });
  const { id, applicationIdParams } = useParams();
  const cookies = new Cookies();
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    const application = await axios.post(
      "https://futurecity.majhailcollection.in/api/createApplication",
      {
        applicatioinId: JSON.stringify(applicationId),
        personalDetails: personalDetailsObj,
        bankDetails: bankDetailsObj,
        contactInfo: contactInfoObj,
        employmentInfo: employmentDetailsObj,
        emergencyContactInfo: emergencyContactDetailsObj,
        documents: uploadDocumentsObj,
        coApplicantInfo: coApplicantInfoObj,
        complexId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, Content-Length, X-Requested-With",
          Authorization: cookies.get("token"),
        },
      }
    );
    setApplicationId(application.data.data.applicationId);
  };
  const handleSubmit = async () => {
    const submit = await axios.post(
      "https://futurecity.majhailcollection.in/api/submitApplication",
      {
        applicationId: applicationId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, Content-Length, X-Requested-With",
          Authorization: cookies.get("token"),
        },
      }
    );
    window.location.href = "/payment";
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderComponent = (step) => {
    switch (step) {
      case 0:
        return (
          <Application
            setApplicationStatus={setApplicationStatus}
            setPersonalDetailsObj={setPersonalDetailsObj}
            setBankDetailsObj={setBankDetailsObj}
            // draftApplication={draftApplication}
          />
        );
      case 1:
        return (
          <ContactPage
            setApplicationStatus={setApplicationStatus}
            setContactInfoObj={setContactInfoObj}
            // draftApplication={draftApplication}
          />
        );
      case 2:
        return (
          <EmploymentPage
            setApplicationStatus={setApplicationStatus}
            setEmploymentDetailsObj={setEmploymentDetailsObj}
            // draftApplication={draftApplication}
          />
        );
      case 3:
        return (
          <EmergencyContactPage
            setApplicationStatus={setApplicationStatus}
            setEmergencyContactDetailsObj={setEmergencyContactDetailsObj}
            // draftApplication={draftApplication}
          />
        );
      case 4:
        return (
          <CoApplicantPage setCoApplicantInfoObj={setCoApplicantInfoObj} />
        );
      case 5:
        return (
          <UploadDetailsPage
            setApplicationStatus={setApplicationStatus}
            setUploadDetailsObj={setUploadDocumentsObj}
            // draftApplication={draftApplication}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    (async () => {
      const housingDetails = await axios.get(
        `https://futurecity.majhailcollection.in/api/getComplexById?complexId=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Authorization, Content-Length, X-Requested-With",
            Authorization: "Bearer " + cookies.get("token"),
          },
        }
      );
      setHousingDetails(housingDetails.data.data);
    })();
  }, []);

  return (
    <>
      <MenuAppBar />

      <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
        Tenancy Application
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* <div
				style={{
					marginTop: "50px",
				}}
			> */}
        {/* {children} */}

        {/* </div> */}
        <div
          style={{
            marginTop: "50px",
            width: "683px",
            // display: "flex",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <ApplicationCard housingDetails={housingDetails} />
        </div>
        {renderComponent(activeStep)}
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, fontSize: "30px" }}>
              All steps completed - Submit your application
            </Typography>
            <Box sx={{ display: "flex" }}>
              {/* <Box sx={{ flex: "auto" }} /> */}
              {/* <Button onClick={handleSubmit}>Submit</Button> */}

              <Button
                variant="contained"
                sx={{
                  margin: "auto",
                  justifyContent: "center",
                  display: "flex",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                pt: 2,
                pb: 2,
                margin: "auto",
                width: "50%",
              }}
            >
              <Button
                // color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, width: "30%" }}
              >
                Back
              </Button>
              <Box sx={{ flex: "auto" }} />

              <Button
                variant="contained"
                sx={{ mr: 1, width: "30%" }}
                onClick={handleNext}
                disabled={applicationStatus === true}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}
