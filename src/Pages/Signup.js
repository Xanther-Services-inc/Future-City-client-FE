import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
	Grid,
	TextField,
	// Link
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoogleLogin from "react-google-login";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
	console.log(response);
};
const card = (
	<React.Fragment>
		<CardContent
			style={{
				width: "517px",
				height: "801px",
				background:
					"linear-gradient(180deg, #0DA8FF -10.45%, rgba(4, 164, 254, 0) 89.55%)",
			}}
		>
			{" "}
			<Typography
				style={{
					fontFamily: "Roboto",
					fontSize: "38px",
					fontWeight: "700",
					marginTop: "78px",
					marginBottom: "78px",
				}}
			>
				SignUp to the Future Cities
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete="given-name"
						name="firstName"
						required
						fullWidth
						id="firstName"
						label="First Name"
						autoFocus
						style={{ background: "white" }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						id="lastName"
						label="Last Name"
						name="lastName"
						autoComplete="family-name"
						style={{ background: "white" }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						style={{ background: "white" }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="email"
						label="Contact Number"
						name="contact"
						autoComplete="email"
						style={{ background: "white" }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="new-password"
						style={{ background: "white" }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="confirmpassword"
						label="Confirm Password"
						type="password"
						id="password"
						autoComplete="new-password"
						style={{ background: "white" }}
					/>
				</Grid>
			</Grid>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
				style={{ height: "53px", background: "#56CCF2" }}
			>
				Sign Up
			</Button>
			<Grid container justifyContent="flex-end">
				{/* <Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					style={{ height: "53px", background: "#56CCF2" }}
				> */}
				<GoogleLogin
					clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
					render={(renderProps) => (
						<>
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								style={{
									background: "white",
									height: "53px",
									width: "100%",
									borderRadius: "4px",
									textAlign: "center",
									fontSize: "24px",
									color: "Black",
								}}
							>
								<img
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
				{/* </Button> */}
			</Grid>
		</CardContent>
	</React.Fragment>
);

export default function Signup() {
	return (
		<Box
			sx={{ minWidth: 275 }}
			style={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				// flexDirection: "column",
				marginTop: "76px",
			}}
		>
			<Card variant="outlined">{card}</Card>
		</Box>
	);
}
