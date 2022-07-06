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
import house1 from "../Images/house1.jpg";
import house2 from "../Images/house2.jpg";
import house3 from "../Images/house3.jpg";
import house4 from "../Images/house4.jpg";

import React from "react";

export default function ProductCard() {
  const cards = [
    { img: house1, heading: "Social Housing", type: "social-housing" },
    { img: house2, heading: "BNG", type: "new" },
    { img: house3, heading: "Bonded Housing", type: "bonded" },
    { img: house4, heading: "Rental", type: "rent" },
    { img: house1, heading: "FLISP", type: "flisp" },
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
      <Grid container spacing={10} style={{ display: "flex" }}>
        {cards.map((card) => (
          <Grid
            item
            key={card}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                height: "483px",
                display: "flex",
                width: "395px",
                flexDirection: "column",
              }}
              elevation={10}
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
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.heading}
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
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
                <Link href={`/socialhousing/${card.type}`} variant="body2">
                  <Button variant="contained" sx={{ background: "#56CCF2" }}>
                    More details
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
