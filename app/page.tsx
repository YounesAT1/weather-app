"use client";
import Loader from "@/components/Loader";
import Weather from "@/components/Weather";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [errMessage, setErrorMessage] = useState<string>("");
  const [weather, setWeather] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_WEATHER_KEY}`;

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    if (city === "") {
      setErrorMessage("Please enter a city name");
    } else {
      try {
        setLoading(true);
        const response = await axios.get(weatherApiUrl);
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setCity("");
        setLoading(false);
        setErrorMessage("");
      }
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <main>
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-gray-800 z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-500 text-gray-800 rounded-lg"
          >
            <div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-gray-800 focus:outline-none text-2xl placeholder:text-gray-400"
                type="text"
                placeholder="Search city..."
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={24} />
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center mt-12">
          {errMessage && (
            <p className="text-red-400 text-2xl bg-red-100 rounded-md p-2 w-4/12 text-center">
              {errMessage}
            </p>
          )}
        </div>
        {weather.main && <Weather data={weather} />}
      </main>
    );
  }
}
