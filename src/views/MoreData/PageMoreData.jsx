import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Components
import ItemMoreData from "../../components/MoreData/ItemMoreData";

//img
import Country from "../../img/country.png";

const PageMoreData = () => {
  const { code } = useParams();
  const [allMoreDataWeather, setAllMoreDataWeather] = useState([]);

  useEffect(() => {
    const handleFetchApiWeather = async () => {
      try {
        const reponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const result = await reponse.json();
        setAllMoreDataWeather(result);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetchApiWeather();
  }, [code]);

  return (
    <div className="min-h-screen bg-purple-500">
      {allMoreDataWeather.message ? (
        <div className="flex flex-col items-center justify-center w-full h-screen text-white">
          <img className="w-40 mb-7" src={Country} alt="logo" />
          <h1 className="text-5xl text-center capitalize">
            {allMoreDataWeather.message}
          </h1>
        </div>
      ) : (
        allMoreDataWeather?.name && (
          <ItemMoreData allMoreDataWeather={allMoreDataWeather} />
        )
      )}
    </div>
  );
};

export default PageMoreData;
