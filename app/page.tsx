import Info from "@/components/info";
import Today from "@/components/today";
import { getWeather } from "./lib/actions";
import Week from "@/components/week";

type SearchParams = Promise<{ [key: string]: string }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.city;

  if (!query) {
    return (
      <main>
        <div className="flex items-center justify-center fixed inset-0 bg-state-100 bg-opacity-65 text-center">
          <h1 className="text-4xl font-medium text-main">
            {" "}
            Пожалуйста введите город для получения прогноща погоды.
          </h1>
        </div>
      </main>
    );
  }

  try {
    const weatherData = await getWeather(query);

    return (
      <main>
        <div className="grid grid-cols-1 gap-3 mb-12 sm:grid-cols-2 md:grid-cols-12 ">
          <Today
            cityName={weatherData.name}
            cityTime={weatherData.time}
            temp={weatherData.temp}
            description={weatherData.current.weather[0].description}
          />
          <Info
            temp={weatherData.temp}
            pressure={weatherData.current.pressure}
            humidity={weatherData.current.humidity}
            windSpeed={weatherData.windSpeed}
            feelsLike={weatherData.feelsLike}
          />
        </div>

        <Week daysArr={weatherData.daily} />
      </main>
    );
  } catch (error) {
    let errorMessage = "Произошла ошибка";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return (
      <main>
        <div className="flex items-center justify-center fixed inset-0 bg-slate-100 bg-opacity-65">
          <h1 className="text-4xl font-medium text-red-500 text-center">
            {errorMessage}
          </h1>
        </div>
      </main>
    );
  }
}
