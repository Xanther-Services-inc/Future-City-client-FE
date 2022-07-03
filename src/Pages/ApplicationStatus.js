import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuAppBar from "../Component/MenuAppBar";
import VerticalStepper from "../Component/VerticalStepper";

export default function ApplicationStatus() {
  return (
    <>
      <MenuAppBar />
      <Grid
        container
        spacing={0}
        // direction="column"
        // alignItems="center"
        // justifyContent="center"
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          {/* <Typography>Hello</Typography> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          //   direction="column"
          //   alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              backgroundColor: "#E5E5E5",
              //   width: "50%",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <VerticalStepper />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <Typography>Hello</Typography> */}
        </Grid>
      </Grid>
    </>
  );
}
