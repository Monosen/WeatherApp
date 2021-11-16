import React from "react";
import { Link } from "react-router-dom";

//SVG
import Clear from "../../../svg/Clear.svg";
import Clouds from "../../../svg/Clouds.svg";
import Mist from "../../../svg/Mist.svg";
import Rain from "../../../svg/Rain.svg";
import Thunderstorm from "../../../svg/Thunderstorm.svg";

//Styles
import "./ItemSearch.styles.css";

const ItemSearch = ({ name, deg, main }) => {
	return (
		<div className="box-weather px-6 py-6 inline-block bg-white">
			<div className="flex mb-3">
				<div className="mt-12">
					<h2 className="text-title text-6xl sm:text-7xl">{deg}°</h2>
					<p className="text-parra text-2xl text-left">{name}</p>
				</div>
				<img
					className="weather-img w-16 m-auto mt-0"
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
			</div>
			<Link className="more-info capitalize relative" to={`/details/${name}`}>
				more information
			</Link>
		</div>
	);
};

export default ItemSearch;
