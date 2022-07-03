import React from "react";
import UploadDetails from "../Component/UploadDetails";

export default function UploadDetailsPage({
  setUploadDetailsObj,
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
        <hr
          style={{
            width: "100%",
            marginTop: "50px",
            borderTop: "3px solid #bbb",
          }}
        />

        <div
          style={{
            width: "70%",
            margin: "auto",
            padding: "20px",
            marginTop: "5%",
            backgroundColor: "#FAFAFA",
          }}
        >
          <UploadDetails
            setUploadDetailsObj={setUploadDetailsObj}
            // draftApplication={draftApplication}
          />
        </div>
      </div>
    </>
  );
}
