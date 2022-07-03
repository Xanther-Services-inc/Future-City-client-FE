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

export default function AddressForm({
  setApplicationStatus,
  setPersonalDetailsObj,
  setShowBankForm,
  showBankForm,
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
        `http://44.206.163.98:3000/api/getApplicationById?applicationId=${applicationIdParams}`,
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
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Application Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={state.firstName}
            InputLabelProps={{
              shrink: state.firstName === "" ? false : true,
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
            id="lastName"
            name="lastName"
            label="Last name"
            value={state.lastName}
            InputLabelProps={{
              shrink: state.lastName === "" ? false : true,
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
        <FormControl
          style={{ marginLeft: "5%", paddingTop: "15px" }}
          onChange={(e) => {
            setSaId(e.target.value);
            console.log(saId);
          }}
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="saId"
            defaultValue={true}
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="SA ID Number"
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Non-SA ID Number/Passport Number"
            />
          </RadioGroup>
        </FormControl>
        {/* </Grid> */}
        <Grid item xs={12} sm={6}>
          {saId === "true" ? (
            <TextField
              required
              id="idNumber"
              name="idNumber"
              label="Id Number"
              value={state.idNumber}
              InputLabelProps={{
                shrink: state.idNumber === "" ? false : true,
              }}
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              onChange={handleChange}
            />
          ) : (
            <TextField
              required
              id="passportNumber"
              name="passportNumber"
              label="Passport Number"
              value={state.passportNumber}
              InputLabelProps={{
                shrink: state.passportNumber === "" ? false : true,
              }}
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              onChange={handleChange}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date Of Birth"
            value={state.dateOfBirth}
            InputLabelProps={{
              shrink: state.dateOfBirth === "" ? false : true,
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Marital Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={state.maritalStatus}
              name="maritalStatus"
              label="Marital Status"
              onChange={handleChange}
              style={{ backgroundColor: "white" }}
            >
              <MenuItem value={"married"}>Married</MenuItem>
              <MenuItem value={"unmarried"}>Unmarried</MenuItem>
              <MenuItem value={"separated"}>Separated</MenuItem>
            </Select>
          </FormControl>
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Box sx={{ minWidth: 120 }}> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Disability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={state.disability}
              onChange={handleChange}
              name="disability"
              label="Disability"
              style={{ backgroundColor: "white" }}
            >
              <MenuItem value={"No"}>No</MenuItem>
              <MenuItem value={"Yes"}>Yes</MenuItem>
            </Select>
          </FormControl>
          {/* </Box> */}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            value={state.address}
            InputLabelProps={{
              shrink: state.address === "" ? false : true,
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
            required
            id="city"
            name="city"
            label="City"
            value={state.city}
            InputLabelProps={{
              shrink: state.city === "" ? false : true,
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
            id="state"
            name="state"
            label="State/Province/Region"
            value={state.state}
            InputLabelProps={{
              shrink: state.state === "" ? false : true,
            }}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={state.zip}
            InputLabelProps={{
              shrink: state.zip === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
