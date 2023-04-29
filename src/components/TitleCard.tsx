import React from "react";
import { Quote } from "../App";

const headerStyle: React.CSSProperties = {
	backgroundColor: "transparent",
	position: "relative",
	transform: "translate(0px, 15vh)",
	fontSize: "55px"
}

const pStyle: React.CSSProperties = {
	backgroundColor: "transparent",
	transform: "translate(0px, -50%)",
	fontSize: "25px"
}

const pStyleItalized: React.CSSProperties = {
	backgroundColor: "transparent",
	fontSize: "12px",
	fontStyle: "italic",
	transform: "translate(0px, -90%)"
}

const TitleCard = () => (
	<>
		<header style={headerStyle}>Random Quotes
			<p style={pStyle}>For when you need a bit of wisdom to brighten your day<p style={pStyleItalized}>Happiness not guaranteed</p></p>
		</header>
	</>
);

export default TitleCard;