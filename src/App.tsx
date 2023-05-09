import React, { useEffect } from 'react';
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
		const endpoint = "https://api.adviceslip.com/advice"; //"http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&origin=*"; //"https://api.quotable.io/random";
		await fetch(endpoint).then(response => response.json()).then((data) => setData(data as Quote)).then((log) => console.log(log)).catch(error => console.log(error));
	}
	
	useEffect(() => {
		handleFetchNewQuote();
	}, []);
	
	return (
		<div className="App bg-blue-300 h-full w-full absolute">
			<TitleCard/>
			{data && <QuoteCard slip={data.slip}  />}
			<button className='p-2 sm:text-sm md:text-base bg-black text-white border-solid rounded-[55px] sm:top-[85%] md:top-3/4 -translate-x-1/2 hover:translate-y-1 absolute cursor-pointer hover:shadow-[0_3px_5px_1px_rgb(17,24,39)] shadow-lg shadow-gray-900' onMouseUp={handleFetchNewQuote}>Click to fetch new advice</button>		
		</div>
	);
}

export default App;