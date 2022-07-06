import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ApplicationCard({ housingDetails }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", border: "1px solid #e0e0e0" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            <span style={{ color: "blue" }}>
              {housingDetails.applicationFee && housingDetails.applicationFee}
            </span>
            /month {/* <span style={{ color: "blue" }}>R700</span>/month */}
          </Typography>
          <Typography component="div" variant="h6" align="left">
            Social Housing
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {housingDetails.address && housingDetails.address}
          </Typography>
          <hr />
          <Grid container spacing={1}>
            <Grid item xs={3} display="flex">
              <Typography
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <BedIcon
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <p
                  style={{
                    fontSize: "10px",
                    marginTop: "-5px",
                    margin: "auto",
                  }}
                >
                  4 Beds
                </p>
              </Typography>
            </Grid>
            <Grid item xs={3} display="flex">
              <Typography
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <BedIcon
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <p
                  style={{
                    fontSize: "10px",
                    marginTop: "-5px",
                    margin: "auto",
                  }}
                >
                  4 Beds
                </p>
              </Typography>
            </Grid>
            <Grid item xs={3} display="flex">
              <Typography
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <BedIcon
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <p
                  style={{
                    fontSize: "10px",
                    marginTop: "-5px",
                    margin: "auto",
                  }}
                >
                  4 Beds
                </p>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<IconButton aria-label="previous">
						{theme.direction === "rtl" ? (
							<SkipNextIcon />
						) : (
							<SkipPreviousIcon />
						)}
					</IconButton>
					<IconButton aria-label="play/pause">
						<PlayArrowIcon sx={{ height: 38, width: 38 }} />
					</IconButton>
					<IconButton aria-label="next">
						{theme.direction === "rtl" ? (
							<SkipPreviousIcon />
						) : (
							<SkipNextIcon />
						)}
					</IconButton>
				</Box> */}
      </Box>
    </Card>
  );
}
