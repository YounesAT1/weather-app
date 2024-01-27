import Image from "next/image";

function Weather({ data }: any) {
  return (
    <section className="relative flex flex-col justify-between max-w-[500px] w-full h-[70vh] m-auto p-4 text-gray-900 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="icon"
            width="100"
            height="100"
          />
          <p className="text-3xl">{data.weather[0].main}</p>
        </div>
        <p className="text-8xl mt-auto">{data.main.temp.toFixed(0)}&#176;F</p>
      </div>

      <div className="bg-black/65 relative p-8 rounded-md text-white">
        <p className="text-2xl text-center pb-6">
          Weather in <span className="font-semibold">{data.name}</span>
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold">
              {data.main.feels_like.toFixed(0)}&#176;F
            </p>
            <p className="text-xl">Fells Like</p>
          </div>
          <div>
            <p className="font-bold">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold">{data.wind.speed.toFixed(0)}MPH</p>
            <p className="text-xl">Wind</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
