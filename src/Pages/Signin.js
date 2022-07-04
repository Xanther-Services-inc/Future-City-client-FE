import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cover from "../ss.png";
import BedIcon from "@mui/icons-material/Bed";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import Cookies from "universal-cookie";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const responseGoogle = async (response) => {
    console.log(response);
    const loginResp = await axios.post(
      "https://futurecity.majhailcollection.in/api/signup",
      {
        userName: response.profileObj.name,
        userEmail: response.profileObj.email,
        socialKey: response.googleId,
        signupType: "google",
        userImage: response.profileObj.imageUrl,
      }
    );
    console.log(loginResp.data);
    if (loginResp.data.status === 200) {
      console.log("indise if block");
      const cookies = new Cookies();
      cookies.set("token", loginResp.data.data.token);
      localStorage.setItem("authenticated", true);
      window.location.href = "/housingpage";
    } else {
      console.log("error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<LockOutlinedIcon />
						</Avatar> */}
            <Typography component="h1" variant="h5">
              Welcome To Future Cities
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              style={{
                width: "50%",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#56CCF2" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <GoogleLogin
                clientId="334944445079-1t1g9k239fgfj9d5phmrnckjv70r6do9.apps.googleusercontent.com"
                render={(renderProps) => (
                  <>
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      style={{
                        background: "white",
                        height: "40px",
                        width: "100%",
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: "24px",
                        color: "Black",
                      }}
                    >
                      <img
                        alt="google"
                        src="https://www.clipartmax.com/png/small/219-2197783_training-documents-google-logo-icon-png.png"
                        style={{
                          height: "50%",
                          // width: "2%",
                          // marginTop: "5%",
                          marginLeft: "-5%",
                          marginRight: "5%",
                        }}
                      />
                      {"Continue With Google "}
                    </button>
                  </>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                style={{
                  background: "#56CCF2",
                  height: "53px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          style={{
            background:
              "linear-gradient(180deg, #0DA8FF -10.45%, rgba(4, 164, 254, 0) 89.55%)",
          }}
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 465 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={cover}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "left" }}
                >
                  Some Title
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "left" }}
                >
                  Some small details goes here
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
                        marginTop: "15px",
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
                        marginTop: "16px",
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
                        marginTop: "15px",
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
                    minWidth: 405,
                    height: "100px",
                    background:
                      "linear-gradient(180deg, #0DA8FF -10.45%, rgba(4, 164, 254, 0) 89.55%)",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography
                        style={{ marginTop: "15%", fontSize: "20px" }}
                      >
                        R 2300/month
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <CardActions>
                        <Button
                          variant="contained"
                          style={{ marginTop: "15px" }}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Card>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
