import { Typography } from "@mui/material";
import React from "react";
// import LinearStepper from "../Component/LinearStepper";
// import MenuAppBar from "../Component/MenuAppBar";
import ApplicationCard from "../Component/ApplicationCard";
// import AddressForm from "../Component/AddressForm";
// import BankingForm from "../Component/BankingForm";
import Contact from "../Component/Contact";
import EmploymentForm from "../Component/EmploymentForm";
import UploadDetails from "../Component/UploadDetails";
import fileUploadReducer from "../StateManagement/fileUploadReducer.js";
import MenuAppBar from "../Component/MenuAppBar";
import PaymentForm from "../Component/PaymentForm";

export default function Payment() {
  return (
    <>
      <MenuAppBar />
      <div
        sx={{
          display: "inline-flex",
          marginTop: "20px",
        }}
      >
        {/* <LinearStepper> */}
        <div
          style={{
            marginTop: "50px",
            width: "683px",
            // display: "flex",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
            Processing Fees Payment
          </Typography>
          <Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu
              scelerisque quam, ac tristique dolor. Aliquam nulla risus,
              fermentum
            </p>
          </Typography>
        </div>
        <hr
          style={{
            width: "100%",
            marginTop: "50px",
            // marginLeft: "-250%",
            borderTop: "3px solid #bbb",
          }}
        />
        {/* <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
					Personal details
				</Typography> */}
        <div
          style={{
            width: "70%",
            margin: "auto",
            padding: "20px",
            marginTop: "5%",
            backgroundColor: "#FAFAFA",
          }}
        >
          <PaymentForm />
        </div>
        {/* </LinearStepper> */}
      </div>
    </>
  );
}
