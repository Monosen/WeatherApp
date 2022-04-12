import LayoutIcon from "../Layouts/MoreData/LayoutIcon";

//SVG
import Thunderstorm from "../../svg/Thunderstorm.svg";
import Clouds from "../../svg/Clouds.svg";
import Clear from "../../svg/Clear.svg";
import Mist from "../../svg/Mist.svg";
import Rain from "../../svg/Rain.svg";

import { RiTempColdLine } from "react-icons/ri";
import { MdOutlineVisibility, MdOutlineCompress } from "react-icons/md";
import { WiHumidity, WiDegrees } from "react-icons/wi";
import { AiOutlineCloud } from "react-icons/ai";

//Styles
import "./ItemMoreData.styles.css";

const ItemMoreData = (props) => {
  const { allMoreDataWeather } = props;

  const { weather, main, name, wind, sys, visibility } = allMoreDataWeather;
  console.log(allMoreDataWeather);

  const date = new Date().toLocaleDateString();

  return (
    <div className="pt-24 text-center text-white">
      <h1 className="text-5xl font-bold">
        {name}, {sys.country}
      </h1>
      <p className="mt-4 uppercase">{date}</p>
      <img
        className="w-32 m-auto my-10 move-weather"
        src={
          weather[0].main === "Mist"
            ? Mist
            : weather[0].main === "Rain"
            ? Rain
            : weather[0].main === "Thunderstorm"
            ? Thunderstorm
            : weather[0].main === "Clear"
            ? Clear
            : Clouds
        }
        alt={weather[0].main}
      />
      <div className="flex justify-center gap-8">
        <p>Min Temp: {main.temp_min}</p>
        <p>Max Temp: {main.temp_max}</p>
      </div>

      <div className="w-full max-w-xs mx-auto mt-10 md:max-w-xl">
        <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center">
          <LayoutIcon>
            <WiDegrees className="mx-auto text-8xl" />
            <p className="capitalize">degrees</p>
            <p className="text-5xl">{wind.deg}°</p>
          </LayoutIcon>
          <LayoutIcon>
            <AiOutlineCloud className="mx-auto text-5xl md:text-8xl" />
            <p className="capitalize">Type</p>
            <p className="uppercase">{weather[0].main}</p>
          </LayoutIcon>
          <LayoutIcon>
            <WiHumidity className="mx-auto text-5xl md:text-8xl" />
            <p className="capitalize">humidity</p>
            <p>{main.humidity}</p>
          </LayoutIcon>
          <LayoutIcon>
            <RiTempColdLine className="mx-auto text-5xl md:text-8xl" />
            <p className="capitalize">temperature</p>
            <p>{main.temp}</p>
          </LayoutIcon>
          <LayoutIcon>
            <MdOutlineCompress className="mx-auto text-5xl md:text-8xl" />
            <p className="capitalize">pressure</p>
            <p>{main.pressure}</p>
          </LayoutIcon>
          <LayoutIcon>
            <MdOutlineVisibility className="mx-auto text-5xl md:text-8xl" />
            <p className="capitalize">visibility</p>
            <p>{visibility}</p>
          </LayoutIcon>
        </div>
      </div>
    </div>
  );
};

export default ItemMoreData;
