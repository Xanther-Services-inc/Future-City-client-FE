// import { Image } from "@mui/icons-material";
import {
  Button,
  Grid,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import house1 from "../Images/house1.jpg";
import house2 from "../Images/house2.jpg";
import house3 from "../Images/house3.jpg";
import house4 from "../Images/house4.jpg";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Box } from "@mui/system";
import cover from "../ss.png";
import BedIcon from "@mui/icons-material/Bed";
import MenuAppBar from "./MenuAppBar";
import AddressForm from "./AddressForm";
import ComplexDetailsForm from "./ComplexDetailsForm";

export default function ComplexDetails() {
  const [housing, setHousing] = useState([]);
  const { type } = useParams();
  // const type = searchParams.get("type");
  console.log({ type });
  const cookies = new Cookies();

  useEffect(() => {
    (async () => {
      const housings = await axios.get(
        `https://futurecity.majhailcollection.in/api/getComplexById?complexId=${type}`,
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

      setHousing(housings.data.data);
    })();
  }, [type]);
  console.log(housing);
  return (
    <>
      {" "}
      <MenuAppBar />
      <div style={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item xs={12} md={4} sx={{ margin: "auto" }}>
            <Typography
              sx={{
                textAlign: "left",
                marginTop: "auto",
                paddingTop: "12%",
                fontSize: "38px",
                width: "589px",
              }}
            >
              Complex Details
            </Typography>
            {/* <Typography
                            variant="body1"
                            fontSize={14}
                            sx={{ textAlign: "left", marginBottom: "24px" }}
                        > */}
            <Grid
              container
              spacing={3}
              sx={{ width: "589px", height: "908px", pt: 5 }}
            >
              <ComplexDetailsForm housing={housing} />

              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "220px",
                  height: "43px",
                  borderRadius: "5px",
                  // alignItems: "center",
                  margin: "auto",
                  my: "10px",
                  paddingBotton: "10px",
                }}
              >
                <Link href={`/tenancy/${type}`} color="inherit" variant="body2">
                  Proceed
                </Link>
              </Button>
            </Grid>
            {/* </Typography> */}
            {/* <Link href="/tenancy">
                            <Button variant="contained">Proceed</Button>
                        </Link> */}
          </Grid>
          <Grid item xs={12} md={4} sx={{ margin: "auto" }}>
            <Grid container style={{ marginTop: "124px" }}>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  src={house1}
                  alt="logo"
                  style={{
                    width: "320px",
                    height: "298px",
                    margin: "5px",
                    marginLeft: "-15px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  src={house2}
                  alt="logo"
                  style={{
                    width: "320px",
                    height: "298px",
                    margin: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  src={house3}
                  alt="logo"
                  style={{
                    width: "320px",
                    height: "298px",
                    margin: "5px",
                    marginLeft: "-10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  src={house4}
                  alt="logo"
                  style={{
                    width: "320px",
                    height: "298px",
                    margin: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <img
                  src={house4}
                  alt="logo"
                  style={{
                    width: "580px",
                    height: "322px",
                    margin: "5px",
                    marginLeft: "-10px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
