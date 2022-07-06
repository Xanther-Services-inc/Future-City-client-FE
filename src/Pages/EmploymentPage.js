import { Typography } from "@mui/material";
import React from "react";
// import LinearStepper from "../Component/LinearStepper";
// import MenuAppBar from "../Component/MenuAppBar";
import ApplicationCard from "../Component/ApplicationCard";
// import AddressForm from "../Component/AddressForm";
// import BankingForm from "../Component/BankingForm";
import Contact from "../Component/Contact";
import EmploymentForm from "../Component/EmploymentForm";

export default function ContactPage({
  setApplicationStatus,
  setEmploymentDetailsObj,
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
          style={{ marginTop: "20px", marginLeft: "22%" }}
        >
          Employment Info
        </Typography>
        <div
          style={{
            width: "801px",
            height: "400px",
            margin: "auto",
            padding: "20px",
            marginTop: "5%",
            backgroundColor: "#FAFAFA",
          }}
        >
          <EmploymentForm
            setApplicationStatus={setApplicationStatus}
            setEmploymentDetailsObj={setEmploymentDetailsObj}
          />
        </div>
        {/* </LinearStepper> */}
      </div>
    </>
  );
}
