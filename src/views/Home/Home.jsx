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
        const reponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const result = await reponse.json();
        setAllWeather(result);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-purple-500">
      <h1 className="mb-20 text-5xl text-center text-white capitalize">
        weather app
      </h1>
      <div className="px-5 bg-white rounded-2xl">
        <FormWather
          handleFetchApiWeather={handleFetchApiWeather}
          setCountry={setCountry}
        />
        <div
          className={`flex justify-center ${
            allWeather?.name ? "my-16" : "m-5"
          } text-center`}
        >
          {loader && <Loader />}
          {allWeather?.name && !loader ? (
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
    </div>
  );
};

export default Home;
