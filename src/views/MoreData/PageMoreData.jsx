import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//Components
import ItemMoreData from "../../components/MoreData/ItemMoreData";

const PageMoreData = () => {
	const { code } = useParams();
	const [allMoreDataWeather, setAllMoreDataWeather] = useState([]);

	useEffect(() => {
		const handleFetchApiWeather = async () => {
			try {
				const key = "5535cff44dcc29eb276bfaa983f60686";
				const reponse = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=${key}`
				);
				const result = await reponse.json();
				setAllMoreDataWeather(result);
				console.log(result);
			} catch (error) {
				console.log(error);
			}
		};
		handleFetchApiWeather();
	}, []);

	return (
		<div className="bg-first min-h-screen">
			{allMoreDataWeather.message ? (
				<div className="h-screen w-full flex justify-center items-center text-white flex-col">
					<img
						className="mb-7 w-40"
						src="https://img.icons8.com/color/240/000000/country.png"
					/>
					<h1 className="text-5xl capitalize text-center">
						{allMoreDataWeather.message}
					</h1>
				</div>
			) : (
				allMoreDataWeather?.name && (
					<ItemMoreData
						name={allMoreDataWeather.name}
						deg={allMoreDataWeather.wind.deg}
						main={allMoreDataWeather.weather[0].main}
						code={allMoreDataWeather.sys.country}
						humidity={allMoreDataWeather.main.humidity}
						temperature={allMoreDataWeather.main.temp}
					/>
				)
			)}
		</div>
	);
};

export default PageMoreData;
