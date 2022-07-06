import * as React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Statistic } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

export default function ComplexDetailsForm({
  setApplicationStatus,
  setPersonalDetailsObj,
  setShowBankForm,
  showBankForm,
  housing,
  // draftApplication,
}) {
  const cookies = new Cookies();
  const [draftApplication, setDraftApplication] = useState(null);
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    dateOfBirth: "",
    maritalStatus: "",
    disability: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });
  console.log(draftApplication);
  const [saId, setSaId] = useState(true);

  const { applicationIdParams } = useParams();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setPersonalDetailsObj({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (
      state.firstName !== "" &&
      state.lastName !== "" &&
      state.address !== "" &&
      state.city !== "" &&
      state.zip !== "" &&
      state.state !== ""
    ) {
      setApplicationStatus(false);
      console.log("hellp");
    }
  }, [
    state.firstName,
    state.lastName,
    state.address,
    state.city,
    state.zip,
    state.state,
  ]);

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
        firstName: isDraftApplication.data.data.personalDetails.firstName,
        lastName: isDraftApplication.data.data.personalDetails.lastName,
        idNumber: isDraftApplication.data.data.personalDetails.idNumber,
        dateOfBirth: isDraftApplication.data.data.personalDetails.dateOfBirth,
        maritalStatus:
          isDraftApplication.data.data.personalDetails.maritalStatus,
        disability: isDraftApplication.data.data.personalDetails.disability,
        address: isDraftApplication.data.data.personalDetails.address,
        city: isDraftApplication.data.data.personalDetails.city,
        zip: isDraftApplication.data.data.personalDetails.zip,
        state: isDraftApplication.data.data.personalDetails.state,
        country: isDraftApplication.data.data.personalDetails.country,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);

  console.log(state);
  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            required
            value={housing.name}
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            required
            label="address"
            value={housing.address}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
            disabled
            required
            id="idNumber"
            name="idNumber"
            label="Complex Type"
            InputLabelProps={{
              shrink: true,
            }}
            value={housing.complexType}
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Region"
            value={housing.region}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Box sx={{ minWidth: 120 }}> */}

          {/* </Box> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Box sx={{ minWidth: 120 }}> */}

          {/* </Box> */}
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            id="address"
            name="address"
            label="Caretaker Name"
            value={housing.careTaker}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            required
            id="city"
            name="city"
            label="Caretaker Contact"
            value={housing.careTakerContact}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="state"
            name="state"
            label="Application Fee"
            value={housing.applicationFee}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            required
            id="zip"
            name="zip"
            label="Additional Charges"
            value={housing.additionalCharges}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
