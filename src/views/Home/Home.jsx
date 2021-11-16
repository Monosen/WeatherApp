import React, { useState } from "react";

//components
import FormWather from "../../components/Home/FormWather";
import ItemSearch from "../../components/Home/itemSeatch/ItemSearch";
import Loader from "../../components/Loader/Loader";

const Home = () => {
	const [allWeather, setAllWeather] = useState([]);
	const [country, setCountry] = useState(null);
	const [loader, setLoader] = useState(false);

	const handleFetchApiWeather = async (e) => {
		e.preventDefault();
		if (country !== "") {
			setLoader(true);
			try {
				const key = "5535cff44dcc29eb276bfaa983f60686";
				const reponse = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}`
				);
				const result = await reponse.json();
				setAllWeather(result);
				console.log(allWeather);
				setLoader(false);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="bg-second h-screen">
			<div className="bg-black h-48 flex items-center justify-center text-center">
				<h1 className="text-5xl text-white">Weather App</h1>
			</div>
			<FormWather
				handleFetchApiWeather={handleFetchApiWeather}
				setCountry={setCountry}
			/>
			<div className="m-16 text-center flex justify-center">
				{loader && <Loader />}
				{allWeather.name && !loader ? (
					<ItemSearch
						name={allWeather.name}
						deg={allWeather.wind.deg}
						main={allWeather.weather[0].main}
					/>
				) : (
					allWeather.message && !loader && <div>{allWeather.message}</div>
				)}
			</div>
		</div>
	);
};

export default Home;
