import { Quote } from "./App";

export const fetchRandomQuote = async () =>
{
	// Possible endpoints (${variable} <- allows variables to be used in string)
	
	// const data = await (await fetch(endpoint)).json();
	
	const endpoint = "https://api.quotable.io/random";
	
	// This succeeded
	// const fetchData = fetch(endpoint).then(response => response.json()).then((data) => setData(data as Quote)).then(res => console.log(res)).catch(error => console.log(error));
	
	const response = await fetch(endpoint);
	const jsonData: Quote = await response.json();
	// console.log(jsonData);
	return jsonData;
};