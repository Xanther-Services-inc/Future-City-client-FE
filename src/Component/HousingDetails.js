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

export default function HousingDetails() {
  const [housing, setHousing] = useState([]);
  const { type } = useParams();
  // const type = searchParams.get("type");
  console.log({ type });
  const cookies = new Cookies();

  useEffect(() => {
    (async () => {
      const housings = await axios.get(
        `https://futurecity.majhailcollection.in/api/getAllComplexByType?complexType=${type}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Authorization, Content-Length, X-Requested-With",
            Authorization: "Bearer " + cookies.get("token"),
          },
        }
      );

      setHousing(housings.data.data);
    })();
  }, [type]);
  console.log(housing);
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ margin: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              marginTop: "auto",
            }}
          >
            Social Housing
          </Typography>
          {/* <Typography
						variant="body1"
						fontSize={14}
						sx={{ textAlign: "left", marginBottom: "24px" }}
					> */}
          <Grid container spacing={3}>
            {housing.map((housing) => (
              <Grid item xs={12} sm={6} key={housing.complexId}>
                <Box
                  sx={{
                    my: 10,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ maxWidth: 265, maxHeight: 340 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="80%"
                      image={cover}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ textAlign: "left", fontSize: "14px" }}
                      >
                        Some Title
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ textAlign: "left" }}
                      >
                        {housing.description}
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={3}
                          style={{ fontSize: "14px", textAlign: "right" }}
                        >
                          <BedIcon
                            style={{
                              width: "20px",
                              height: "20px",
                              // marginTop: "15px",
                            }}
                          />
                          <span>4 Beds</span>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          style={{ fontSize: "14px", textAlign: "right" }}
                        >
                          <BedIcon
                            style={{
                              width: "20px",
                              height: "20px",
                              // marginTop: "16px",
                            }}
                          />
                          4 beds
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          style={{ fontSize: "14px", textAlign: "right" }}
                        >
                          <BedIcon
                            style={{
                              width: "20px",
                              height: "20px",
                              // marginTop: "15px",
                            }}
                          />
                          4 beds
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Card
                        sx={{
                          minWidth: 215,
                          height: "50px",
                          background:
                            "linear-gradient(180deg, #0DA8FF -10.45%, rgba(4, 164, 254, 0) 89.55%)",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography
                              style={{ fontSize: "14px", margin: "5px" }}
                            >
                              R {housing.applicationFee}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <CardActions>
                              <Link href={`/tenancy/${housing.complexId}`}>
                                <Button
                                  variant="contained"
                                  style={{ fontSize: "10px" }}
                                >
                                  Proceed
                                </Button>
                              </Link>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Card>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))}
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
  );
}
