import { Typography } from "@mui/material";
import React from "react";
// import LinearStepper from "../Component/LinearStepper";
// import MenuAppBar from "../Component/MenuAppBar";
import ApplicationCard from "../Component/ApplicationCard";
import CoApplicantForm from "../Component/CoApplicantForm";
// import AddressForm from "../Component/AddressForm";
// import BankingForm from "../Component/BankingForm";
import Contact from "../Component/Contact";
import EmergencyContact from "../Component/EmergencyContact";

export default function CoApplicantPage({
  setApplicationStatus,
  setCoApplicantInfoObj,
  draftApplication,
}) {
  return (
    <>
      <div
        sx={{
          display: "inline-flex",
          marginTop: "20px",
        }}
      >
        {/* <LinearStepper> */}
        {/* <div
					style={{
						marginTop: "50px",
						width: "683px",
						// display: "flex",
						margin: "auto",
						justifyContent: "center",
					}}
				>
					<ApplicationCard />
				</div> */}
        <hr
          style={{
            width: "100%",
            marginTop: "50px",
            // marginLeft: "-250%",
            borderTop: "3px solid #bbb",
          }}
        />
        <Typography
          variant="h4"
          align="left"
          style={{ marginTop: "20px", marginLeft: "25%" }}
        >
          Co-Applicant Id
        </Typography>
        <div
          style={{
            width: "696px",
            margin: "auto",
            padding: "20px",
            marginTop: "2%",
            backgroundColor: "#FAFAFA",
          }}
        >
          <CoApplicantForm
            setApplicationStatus={setApplicationStatus}
            setCoApplicantInfoObj={setCoApplicantInfoObj}
            // draftApplication={draftApplication}
          />
        </div>
        {/* </LinearStepper> */}
      </div>
    </>
  );
}
