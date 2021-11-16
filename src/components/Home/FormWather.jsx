import React from "react";

const FormWather = ({ handleFetchApiWeather, setCountry }) => {
	return (
		<div className="mt-10 text-center">
			<form
				action=""
				onSubmit={(e) => {
					handleFetchApiWeather(e);
				}}
			>
				<input
					className="rounded-l-md py-2.5 px-3 w-5/12 max-w-xs border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-md"
					type="text"
					placeholder="Country"
					onChange={(e) => setCountry(e.target.value.replace(/ /g, ""))}
				/>
				<input
					className="rounded-r-md py-2.5 px-3 bg-black text-white hover:bg-white hover:text-black border hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
					type="submit"
					value="Search"
				/>
			</form>
		</div>
	);
};

export default FormWather;
