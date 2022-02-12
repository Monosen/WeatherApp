import React from "react";

//SVG
import Thunderstorm from "../../svg/Thunderstorm.svg";
import Clouds from "../../svg/Clouds.svg";
import Clear from "../../svg/Clear.svg";
import Mist from "../../svg/Mist.svg";
import Rain from "../../svg/Rain.svg";

//Styles
import "./ItemMoreData.styles.css";

const ItemMoreData = (props) => {
	const { name, deg, code, main, humidity, temperature } = props;

	const date = new Date().toLocaleDateString();

	return (
		<div className="text-white text-center pt-24">
			<h1 className="text-5xl font-bold">
				{name}, {code}
			</h1>
			<p className="uppercase mt-4">{date}</p>
			<img
				className="move-weather my-10 w-32 m-auto"
				src={
					main === "Mist"
						? Mist
						: main === "Rain"
						? Rain
						: main === "Thunderstorm"
						? Thunderstorm
						: main === "Clear"
						? Clear
						: Clouds
				}
				alt={main}
			/>
			<p className="text-5xl">{deg}°</p>
			<p className="uppercase mt-3.5">{main}</p>
			<p className="capitalize mt-3">humidity: {humidity}</p>
			<p className="capitalize mt-3">temperature: {temperature}</p>
		</div>
	);
};

export default ItemMoreData;
