import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          mt: 10,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          fontSize={38}
          fontFamily="Raleway"
          fontStyle={"bold"}
        >
          Select the housing type
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          fontSize={14}
        >
          Select your own house based on your budget, and suitable for you and
          precious family
        </Typography>
      </Container>
    </div>
  );
}
