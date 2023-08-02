import React, { useEffect, useState } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import TitleCard from './components/TitleCard';

export interface Quote
{
	slip: {
		advice: string
	}
}

function App()
{
	const [data, setData] = React.useState<Quote>();
	
	const handleFetchNewQuote = async () =>
	{
		const endpoint = "https://api.adviceslip.com/advice";
		await fetch(endpoint).then(response => response.json()).then((data) => setData(data as Quote)).catch(error => console.log(error));
	}
	
	useEffect(() => {
		handleFetchNewQuote();
	}, []);
	
	return (
		<div className="App bg-gradient-to-tr from-cyan-500 to-blue-300 h-full w-full absolute">
			<TitleCard/>
			{data && <QuoteCard slip={data.slip}  />}
			<button className='p-2 sm:text-sm md:text-base bg-blue-600 text-white rounded-[55px] top-[85%] -translate-x-1/2 absolute cursor-pointer hover:bg-blue-700 active:bg-blue-800' onMouseUp={handleFetchNewQuote} onTouchEnd={handleFetchNewQuote} >Click to fetch new advice</button>		
		</div>
	);
}

export default App;