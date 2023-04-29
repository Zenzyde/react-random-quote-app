import React from "react";
import { Quote } from "../App";

const divStyle: React.CSSProperties = {
	width: "75%",
	backgroundColor: "darkblue",
	borderStyle: "solid",
	borderRadius: "55px",
	transform: "translate(0px, 25vh)",
	boxShadow: "7px 7px 5px gray"
};

const h1Style: React.CSSProperties = {
	width: "50%",
	color: "white",
	textAlign: "left",
};

const pStyle: React.CSSProperties = {
	width: "15%",
	color: "silver",
	borderStyle: "solid",
	borderRadius: "55px"
};

const QuoteCard = ({ content, author }: Quote) => (
	<center>
		<div style={divStyle}>
			<h1 style={h1Style}>{content}</h1>	
			<p style={pStyle}>- {author}</p>
		</div>
	</center>
);

export default QuoteCard;