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
            // disabled={true}
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <a
              href="https://futurecitybucket.s3.us-east-1.amazonaws.com/InvoiceSimple-PDF-Template.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCmFwLXNvdXRoLTEiSDBGAiEA30lLAguyY8sa%2BD%2BBqwMu2r8lSi4pApjq8ZawPYB9b2ACIQC6e2WBiPhcfhd%2F0diah2SwK15TDbEGTo0zCXu8msyomyrkAghGEAEaDDM4NjE1ODAyNTQxMSIMoLKd6AQlF9sz3d6XKsECM%2FqBcAJ1CxsUIbQ1xugjgJW7kPRGfWcvcJHT2C079MyKV0kI5l02rlZ3rMhFgw8B6HipcoU8IbJx7pWFuCh6JKTyHFgSJM5wxee%2F8w3rDJ5h4WYCV5fetSx9xIIK%2BIkmr9G4hdXLfDIEs9o0NiItYkES%2FcYLQdIJicwZL7oait%2BJUQfJ4lEYpP2CHarQXWeQptyvyuQz03arB9jdSDz2fMESDMtKoPEVM7%2FeRw%2FFUwNKk8D0dF8u%2BHbRyWvKz%2F32RVPo4KdtG9grH5AFe1VaXQWYnfDjPOSmapIqs926AMP7jWjRfKCDmb9PvR%2FqIDAujBp4JbpWXYo8tmCA4BkDphXUDMc5oDyFDFo2Suce6LBK8rk0GcAmQ3vUmf1jw4jC7wsXPTUsLw3kwJOcxDkoyEJoaJiiGPKxEgOuMvEd3EYmMLG6sJYGOrICNp824cKet6AHCCP67kq%2BOv3iYe1gm4yMiTGGP6bYqiZJ6rbaZqNZiieqEgJX%2FkGWrlUW8ooqNjA9YQXBryxqqZJwfhZ5tn4Lyf522hJsibAOOGhcTQuiI5BMlx%2FWFovAReck33N%2FjrDd%2F1kHscd8y22mil08g3cmu7pc9JFTWfaKOwCXNUBxgxNf71MuHSWFF%2B%2F4JpR8oye62NtBfykbL2Nsi7Zw60F4leZUYk8Ud7zXyx00iwW3TGfK006epgzyNxonhrbRzSeV%2B4HhAqdPudfZtk7ki9bXkmh5RgEuKUtw8M0NirW4oPJwLdY5u4EZw3zbLblrt0YPw%2FhryT0amIEiZISFYrwNMvDNaEuTX7RyUX16IT%2BjZuivOKDuh2%2B%2BOvGY7jbAieR29xyMA7giUeOQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220711T141709Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVT2GP3LBQM7TW2PP%2F20220711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8959d0c7ed6913211599be5da05ec7377f7ab69b87c9697f9bb70816b4e19779"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Print Invoice
            </a>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
