import React, { useEffect } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import TitleCard from './components/TitleCard';

export interface Quote
{
	content: string
	author: string
}

const style: React.CSSProperties = {
	backgroundColor: "lightblue",
	height: "100vh",
	width: "100vw",
	position: "absolute",
	// top: "50%",
	// transform: "translate(0px, -50%)"
	// display: "flex",
	// justifyContent: "center",
	// alignItems: "center"
}

const btnStyleHover: React.CSSProperties = {
	borderStyle: "solid",
	borderRadius: "55px",
	position: "relative",
	transform: "translate(0px, 27vh)",
	cursor: "pointer",
	boxShadow: "3px 3px 5px gray"
}

const btnStyleNormal: React.CSSProperties = {
	borderStyle: "solid",
	borderRadius: "55px",
	position: "relative",
	transform: "translate(1px, 27.1vh)",
	cursor: "pointer"
}

function App()
{
	const [data, setData] = React.useState<Quote>();
	const [isHovering, setIsHovering] = React.useState<boolean>(false);
	
	const handleFetchNewQuote = async () =>
	{
		const endpoint = "https://api.quotable.io/random";
		await fetch(endpoint).then(response => response.json()).then((data) => setData(data as Quote)).then((log) => console.log(log)).catch(error => console.log(error));
	}
	
	useEffect(() => {
		handleFetchNewQuote();
	}, []);
	
	return (
		<div style={style} className="App">
			
			<TitleCard/>
			{data && <QuoteCard content={data.content} author={data.author}/>}
			<button style={!isHovering ? btnStyleHover : btnStyleNormal} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={handleFetchNewQuote}>Motivate Me</button>
		</div>
	);
}

export default App;