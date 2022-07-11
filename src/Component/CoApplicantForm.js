import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CoApplicantForm({
  setApplicationStatus,
  setCoApplicantInfoObj,
  // draftApplication,
}) {
  const cookies = new Cookies();
  const { applicationIdParams } = useParams();
  const [state, setState] = React.useState({
    CoApplicantId: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setCoApplicantInfoObj({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  React.useEffect(() => {
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
        CoApplicantId:
          isDraftApplication.data.data.CoApplicantInfo.CoApplicantId,
      });
      setCoApplicantInfoObj({
        ...state,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);

  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      {/* <Typography variant="h6" gutterBottom textAlign={"left"}>
        Shipping address
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="co_applicant_id"
            name="CoApplicantId"
            label="Co Applicant Id"
            value={state.CoApplicantId}
            InputLabelProps={{
              shrink: state.kin === "" ? false : true,
            }}
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
            onChange={handleChange}
          />
        </Grid>

        {/* <Grid item xs={12} sm={6}>
					<TextField
						required
						id="zip"
						name="zip"
						label="Zip / Postal code"
						fullWidth
						autoComplete="shipping postal-code"
						variant="outlined"
						style={{ backgroundColor: "white" }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="outlined"
						style={{ backgroundColor: "white" }}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox color="secondary" name="saveAddress" value="yes" />
						}
						label="Use this address for payment details"
					/>
				</Grid> */}
      </Grid>
    </React.Fragment>
  );
}
