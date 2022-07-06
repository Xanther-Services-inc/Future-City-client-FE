import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function PaymentConfirmationForm() {
  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            Amount paid
          </Typography>
          <TextField
            required
            id="email"
            name="email"
            // label="Email Address"
            value={"R 2000"}
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              //   fontSize: "18px",
              //   fontWeight: "bold",
              display: "flex",
              justifyContent: "start",
            }}
          >
            Request Id
          </Typography>
          <TextField
            id="cardNumber"
            name="cardNumber"
            // label="Credit Card"
            value={"123-23qw23-23"}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            Payment Id
          </Typography>
          <TextField
            required
            id="alternative"
            name="alternative"
            // label="Alternative Contact Number"
            value={"12323"}
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            Status
          </Typography>
          <TextField
            required
            id="alternative"
            name="alternative"
            // label="Alternative Contact Number"
            value={"Process Initiated"}
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>

        <Grid item xs={12} mt={5} pb={5}>
          <Button
            variant="contained"
            color="primary"
            disabled={true}
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            Print Invoice
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
