import { Typography } from "@mui/material";
import React from "react";
import LinearStepper from "../Component/LinearStepper";
import MenuAppBar from "../Component/MenuAppBar";
import ApplicationCard from "../Component/ApplicationCard";
import AddressForm from "../Component/AddressForm";
import BankingForm from "../Component/BankingForm";

export default function Application({
  setApplicationStatus,
  setPersonalDetailsObj,
  setBankDetailsObj,
  draftApplication,
}) {
  const [showBankForm, setShowBankForm] = React.useState(true);

  return (
    <>
      <div
        sx={{
          display: "inline-flex",
          marginTop: "20px",
        }}
      >
        {/* <LinearStepper> */}

        <hr
          style={{
            width: "100%",
            marginTop: "50px",
            // marginLeft: "-250%",
            borderTop: "3px solid #bbb",
          }}
        />
        <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
          Personal details
        </Typography>
        <div
          style={{
            width: "70%",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <AddressForm
            setApplicationStatus={setApplicationStatus}
            setPersonalDetailsObj={setPersonalDetailsObj}
            setShowBankForm={setShowBankForm}
            showBankForm={showBankForm}
            // draftApplication={
            //   Object.keys(draftApplication).length > 0 && draftApplication
            // }
          />
        </div>
        <div
          style={{
            width: "70%",
            margin: "auto",
            marginTop: "5%",
            padding: "20px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <BankingForm
            setBankDetailsObj={setBankDetailsObj}
            // draftApplication={draftApplication}
          />
        </div>
        {/* </LinearStepper> */}
      </div>
    </>
  );
}
