import { Grid, Typography } from "@mui/material";
import React from "react";
import HousingDetails from "../Component/HousingDetails";
import MenuAppBar from "../Component/MenuAppBar";

export default function Housing() {
	return (
		<>
			<MenuAppBar />
			<HousingDetails />
		</>
	);
}
