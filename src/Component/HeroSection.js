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
					fontFamily="Roboto"
					fontStyle={"regular"}
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
					Something short and leading about the collection below—its contents,
					the creator, etc. Make it short and sweet, but not too short so folks
					don&apos;t simply skip over it entirely.
				</Typography>
			</Container>
		</div>
	);
}
