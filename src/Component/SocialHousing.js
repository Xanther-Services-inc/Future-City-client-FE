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

export default function SocialHousing() {
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
              Social Housing
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
              <Typography sx={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies fusce quis viverra adipiscing. Lorem scelerisque nibh
                accumsan non in est dui nec. Ornare vulputate egestas rhoncus,
                nec fames. Nec purus sagittis varius sit. Sed amet nibh neque
                nulla scelerisque scelerisque. Nascetur tempor pretium nibh
                dictum neque faucibus auctor ultrices. Interdum elit mi ultrices
                vivamus ipsum tellus id ornare. Mi nibh hac mauris, urna urna
                sit nulla enim duis. Condimentum scelerisque nullam congue massa
                adipiscing mattis diam enim vulputate. Ac amet morbi mattis
                auctor ac. Suspendisse magna sit id et elementum maecenas non,
                nunc. Quis interdum et tellus odio. Tortor euismod morbi turpis
                bibendum enim ut massa. Nec arcu faucibus pretium porta. Purus
                at commodo molestie platea placerat nisl bibendum dignissim vel.
                Scelerisque nibh pharetra, adipiscing arcu, amet. Faucibus
                pellentesque elit et suspendisse a vel senectus. Semper
                sagittis, in ipsum, in arcu congue. Amet risus, tellus orci sed
                et malesuada. Pretium a fusce nibh eget tincidunt mauris nulla.
                Turpis dolor ultricies semper neque est vulputate in sed. Eros
                iaculis nulla enim ut maecenas neque arcu. Sit turpis vitae
                dictum sagittis nunc felis tellus. Neque purus phasellus sem
                enim, et faucibus dui a leo. Rhoncus vestibulum nibh vitae risus
                adipiscing ullamcorper. Quis lacus sed consectetur sit eget
                laoreet hendrerit amet. Ullamcorper convallis faucibus mi
                convallis dictum dolor nulla nisi, pulvinar. Et morbi leo
                pharetra, ipsum. Bibendum quisque sit sem risus in arcu.
                Sagittis, pharetra tellus quis convallis consequat vulputate
                porta condimentum egestas. Porttitor neque, ultrices
                sollicitudin urna sit. Iaculis pellentesque dictum sed habitasse
                massa imperdiet. Magna id elementum viverra tempus donec. Id
                magna dignissim proin viverra mattis donec sed elit at. Sem arcu
                tortor pellentesque nunc tincidunt sed morbi lectus. Tellus
                euismod sodales nunc, nibh aliquam. Sit risus sed nulla
                sollicitudin et scelerisque lectus ultrices. Pretium dignissim
                arcu dui curabitur. Turpis et volutpat erat tristique
                ullamcorper tortor et. In sit malesuada scelerisque sagittis
                consectetur commodo porttitor. Enim pharetra dolor condimentum
                aliquam. Integer ullamcorper dapibus sed et duis aliquam erat
                turpis. Libero id sed aliquet amet a adipiscing. Tellus nibh
                risus pellentesque pharetra proin massa non. A condimentum
                condimentum ut adipiscing bibendum adipiscing sed auctor donec.
                Amet congue nullam eget volutpat enim, egestas vulputate odio
                luctus. Tempus habitant sapien iaculis est, vestibulum habitasse
                maecenas lorem. Condimentum ullamcorper et et, ultricies.
                Nascetur semper tristique quisque leo proin cras. Ultrices
                aliquet volutpat libero nulla mattis. Massa amet libero
                tincidunt facilisis leo in aliquam. Fusce amet neque, cursus
                cursus donec. Sed dolor ultrices amet urna, semper potenti et.
                Elementum sodales dictum vestibulum elementum. Morbi
                sollicitudin volutpat ac ullamcorper neque facilisis. Porta
                dapibus suspendisse a, maecenas nibh. Tortor mi nunc tortor
              </Typography>

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
                <Link
                  href={`/housingDetails/${type}`}
                  color="inherit"
                  variant="body2"
                >
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
