import { useEffect, useState } from "react";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("Karachi");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getWeather();
  }, [city]);

  const getWeather = () => {
    if (!city) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
      });
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondition = currentWeather?.weather[0]?.main;

  const handleSearch = () => {
    setCity(searchQuery); // Update the city state
    setSearchQuery(""); // Clear the input field
  };

  return (
    <div>
      <h1 className="font-bold text-2xl my-5 text-align-center flex justify-center">Weather App</h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter city name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-1 w-30"
        />
        <button onClick={handleSearch} className="ml-2 px-3 py-1 text-white mt-3 bg-blue-700">
          Search
        </button>
      </div>
      <div className="my-4 flex justify-center">
        <h2 className="text-xl font-bold">{city}</h2> {/* Display the city name */}
      </div>

      <div className="w-[full] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[30%] p-4 m-auto ">
        {weatherCondition === "Haze" && (
          <img src="/img/haze.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Clear" && (
          <img src="/img/clear.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Smoke" && (
          <img src="/img/smoke.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Mist" && (
          <img src="/img/mist.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Drizzle" && (
          <img src="/img/drizzle.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === ("Sun") && (
          <img src="/img/sunny.jpeg" alt="Sunny weather" />
        )}
        {weatherCondition === ("Clouds") && (
          <img src="/img/cloud.jpeg" alt="" />
        )}
        {weatherCondition === ("Rain") && (
          <img src="/img/rain.jpeg" alt="" />
        )}
        {weatherCondition === ("Storm") && (
          <img src="/img/storm.jpeg" alt="" />
        )}
        {weatherCondition === ("Hail") && (
          <img src="/img/hail.jpeg" alt="hail" />
        )}
        {weatherCondition === "Lightning" && (
          <img src="/img/lightening.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Thunder" && (
          <img src="/img/thunder.jpeg" alt="" srcSet="" />
        )}
        {weatherCondition === "Rainbow" && (
          <img src="/img/rainbow.jpeg" alt="" srcSet="" />
        )}



        <h1 className="font-semibold">Temperature</h1>
        <h1 className="font-semibold">{temp}°C</h1>

        <div className="flex justify-between">
          <h1 className="font-semibold">Feels Like</h1>
          <h1 className="font-semibold">{feelsLike}°C</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold">Weather</h1>
          <h1 className="font-semibold">{weatherCondition}</h1>
        </div>
      </div>

    </div>
  );
}

export default Weather;