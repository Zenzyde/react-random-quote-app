import React from "react";
import { Quote } from "../App";

const QuoteCard = ({ slip }: Quote) => (
	<div className="bg-blue-800 p-2 border-solid rounded-[55px] top-1/2 md:top-[45%] left-1/2 absolute -translate-x-1/2 shadow-lg shadow-gray-900">
		<p className="p-2 sm:text-2xl md:text-4xl text-zinc-100 border-solid rounded-[55px]">{slip.advice}</p>
	</div>
);

export default QuoteCard;