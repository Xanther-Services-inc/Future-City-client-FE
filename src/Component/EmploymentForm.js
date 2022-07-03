import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

export default function EmploymentForm({
  setApplicationStatus,
  setEmploymentDetailsObj,
  draftApplication,
}) {
  const cookies = new Cookies();
  const { applicationIdParams } = useParams();
  const [state, setState] = React.useState({
    occupation: "",
    employer: "",
    employerno: "",
    income: "",
    expense: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setEmploymentDetailsObj({
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
        occupation: isDraftApplication.data.data.employmentInfo.occupation,
        employer: isDraftApplication.data.data.employmentInfo.employer,
        employerno: isDraftApplication.data.data.employmentInfo.employerno,
        income: isDraftApplication.data.data.employmentInfo.income,
        expense: isDraftApplication.data.data.employmentInfo.expense,
      });
      setEmploymentDetailsObj({
        ...state,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);

  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="occupation"
            name="occupation"
            label="Occupation"
            value={state.occupation}
            fullWidth
            InputLabelProps={{
              shrink: state.occupation === "" ? false : true,
            }}
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="employer"
            name="employer"
            label="Employer"
            value={state.employer}
            InputLabelProps={{
              shrink: state.employer === "" ? false : true,
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
            id="employerno"
            name="employerno"
            label="Employer Contact Number"
            value={state.employerno}
            InputLabelProps={{
              shrink: state.employerno === "" ? false : true,
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
            id="income"
            name="income"
            label="Total Income"
            value={state.income}
            InputLabelProps={{
              shrink: state.income === "" ? false : true,
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
            id="expense"
            name="expense"
            label="Total Expenses"
            value={state.expense}
            InputLabelProps={{
              shrink: state.expense === "" ? false : true,
            }}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
