import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

export default function AddressForm({
  setApplicationStatus,
  setContactInfoObj,
  DraftApplication,
}) {
  const cookies = new Cookies();
  const { applicationIdParams } = useParams();
  const [state, setState] = React.useState({
    email: "",
    phnumber: "",
    alternative: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setContactInfoObj({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  React.useEffect(() => {
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
        email: isDraftApplication.data.data.contactInfo.email,
        phnumber: isDraftApplication.data.data.contactInfo.phnumber,
        alternative: isDraftApplication.data.data.contactInfo.alternative,
      });
      setContactInfoObj({
        ...state,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);
  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Contact Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            value={state.email}
            InputLabelProps={{
              shrink: state.email === "" ? false : true,
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
            id="phnumber"
            name="phnumber"
            label="Contact Number"
            value={state.phnumber}
            InputLabelProps={{
              shrink: state.phnumber === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="alternative"
            name="alternative"
            label="Alternative Contact Number"
            value={state.alternative}
            InputLabelProps={{
              shrink: state.alternative === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
