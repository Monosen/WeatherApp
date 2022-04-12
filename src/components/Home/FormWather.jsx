import React from "react";

const FormWather = ({ handleFetchApiWeather, setCountry }) => {
  return (
    <div className="mt-10 text-center">
      <form
        onSubmit={(e) => {
          handleFetchApiWeather(e);
        }}
      >
        <input
          className="rounded-l-md py-2.5 px-3 w-6/12 max-w-xs border-transparent focus:border-transparent bg-gray focus:outline-none"
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value.replace(/ /g, ""))}
        />
        <input
          className="rounded-r-md py-2.5 px-3 bg-purple-500 text-white hover:bg-white hover:text-purple-500 border hover:border-purple-500 focus:outline-none"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default FormWather;
