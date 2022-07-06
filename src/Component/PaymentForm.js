import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { WindowRounded } from "@mui/icons-material";

export default function PaymentForm() {
  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            Amount to be paid
          </Typography>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgba(0, 0, 0, 0.5)",
            }}
            gutterBottom
            textAlign={"left"}
          >
            Payment Method
          </Typography>
          <hr />
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
            Credit Card
          </Typography>
          <TextField
            id="cardNumber"
            name="cardNumber"
            label="Credit Card"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            Expiry Date
          </Typography>
          <TextField
            required
            id="alternative"
            name="alternative"
            label="Alternative Contact Number"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            CVV
          </Typography>
          <TextField
            required
            id="alternative"
            name="alternative"
            label="Alternative Contact Number"
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
            Name on Card
          </Typography>
          <TextField
            required
            id="alternative"
            name="alternative"
            label="Alternative Contact Number"
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
            style={{
              width: "50%",
              justifyContent: "center",
            }}
            onClick={() => {
              window.location.href = "/payment-confirmation";
            }}
          >
            Make Payment
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
