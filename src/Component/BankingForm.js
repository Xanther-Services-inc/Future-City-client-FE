import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

export default function BankingForm({ setBankDetailsObj, draftApplication }) {
  const cookies = new Cookies();
  const { applicationIdParams } = useParams();
  const [state, setState] = useState({
    bankName: "",
    branchCode: "",
    accountType: "",
    accountNumber: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setBankDetailsObj({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    (async () => {
      const isDraftApplication = await axios.get(
        `https://futurecity.majhailcollection.in/api/getApplicationById?applicationId=${applicationIdParams}`,
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
      setState({
        bankName: isDraftApplication.data.data.bankDetails.bankName,
        branchCode: isDraftApplication.data.data.bankDetails.branchCode,
        accountType: isDraftApplication.data.data.bankDetails.accountType,
        accountNumber: isDraftApplication.data.data.bankDetails.accountNumber,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);

  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Banking Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="bankName"
            name="bankName"
            label="Bank Name"
            value={state.bankName}
            InputLabelProps={{
              shrink: state.bankName === "" ? false : true,
            }}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="branchCode"
            name="branchCode"
            label="Branch Code"
            value={state.branchCode}
            InputLabelProps={{
              shrink: state.branchCode === "" ? false : true,
            }}
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            style={{
              backgroundColor: "white",
            }}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid
					item
					xs={12}
					sm={6}
					// style={{ display: "flex", justifyContent: "flex" }}
				> */}
        {/* </Grid> */}

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="accountType"
            name="accountType"
            label="Account Type"
            value={state.accountType}
            InputLabelProps={{
              shrink: state.accountType === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="accountNumber"
            name="accountNumber"
            label="Account Number"
            value={state.accountNumber}
            InputLabelProps={{
              shrink: state.accountNumber === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
