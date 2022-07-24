import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import house1 from "../Images/social.jpeg";
import house2 from "../Images/bng.jpeg";
import house3 from "../Images/bonded.jpeg";
import house4 from "../Images/rental.jpeg";
import house5 from "../Images/flisp.jpeg";

import React from "react";

export default function ProductCard() {
  const cards = [
    {
      // img: "https://futurecitybucket.s3.amazonaws.com/social.jpeg",
      img:house1,
      heading: "Social Housing",
      type: "social-housing",
      incomeRange: "R1,850 - R22,000",
    },
    {
      // img: "https://futurecitybucket.s3.amazonaws.com/bng.jpeg",
      img:house2,
      heading: "BNG",
      type: "new",
      incomeRange: "R0 - R3,500",
    },
    {
      // img: "https://futurecitybucket.s3.amazonaws.com/bonded.jpeg",
      img:house3,
      heading: "Bonded Housing",
      type: "bonded",
      incomeRange: "R1,850 - R22,000",
    },
    {
      // img: "https://futurecitybucket.s3.amazonaws.com/rental.jpeg",
      img:house4,
      heading: "Rental",
      type: "rent",
      incomeRange: "R10,000 - R30,000",
    },
    {
      // img: "https://futurecitybucket.s3.amazonaws.com/flisp.jpeg",
      img:house5,
      heading: "FLISP",
      type: "flisp",
      incomeRange: "R3,500 - R22,500",
    },
  ];
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "5%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "5%",
      }}
      
    >
      {/* End hero unit */}
      <Grid container spacing={2} style={{ display: "flex" }} >
        {cards.map((card) => (
          <Grid
            item
            key={card}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Card
              sx={{
                // height: "483px",
                display: "flex",
                width: "395px",
                flexDirection: "column",
                borderRadius: "12px",
              }}
              elevation={10}
              className="DarkCard"
            >
              <CardMedia
                component="img"
                sx={{
                  width: "361px",
                  height: "278px",
                  margin: "auto",
                  marginTop: "10px",
                }}
                image={card.img}
                // src={card.img}
                alt="random"
                className="DarkCard"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography className="DarkFontsColor" gutterBottom variant="h5" component="h2">
                  {card.heading}
                </Typography>

                <hr />
                <Grid container spacing={0} className="incomeRange">
                  <Grid sm={6} className="DarkFontsColor">
                    <p style={{fontWeight: "bold" }}>
                      Income Range / month
                    </p>
                  </Grid>
                  <Grid className="DarkFontsColor" sm={6}>{card.incomeRange}</Grid>
                </Grid>
                <hr />
              </CardContent>
              <CardActions
                sx={{
                  dispaly: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Link
                  href={`/housinglist/${card.type}`}
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="DarkButtonBackground" variant="contained" sx={{ background: "#00022e",width: "300px",marginTop:"-30px" }}>
                    Apply Now
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
