import Image from "next/image";

interface Props {
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

export default function Info({
  temp,
  pressure,
  humidity,
  windSpeed,
  feelsLike,
}: Props) {
  const infoArr = [
    {
      id: 1,
      title: "Температура",
      val: `${temp} - ошущается как ${feelsLike}°`,
      image: "/temp.svg",
    },
    {
      id: 2,
      title: "Давление",
      val: `${pressure} мм ртутного столба`,
      image: "/pressure.svg",
    },

    {
      id: 3,
      title: "Влажность",
      val: `${humidity}%`,
      image: "/downfall.svg",
    },
    {
      id: 4,
      title: "Ветер",
      val: `${windSpeed} м/c `,
      image: "/wind.svg",
    },
  ];
  return (
    <div className=" space-y-4 sm:space-y-9 sm:py-10 py-5 px-3 md:col-span-7 md:px-5 lg:px-10  shadow-lg rounded-[20px] max-h-72">
      {infoArr.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <div className=" rounded-w-full w-5 h-5 bg-white flex items-center justify-center ">
            <Image
              src={item.image}
              width={25}
              height={25}
              alt="Info image"
              className="w-auto h-auto "
            />
          </div>
          <p className="text-xs md:text-base lg:text-lg text-gray-400 ">
            {item.title}
          </p>
          <p className="text-xs md-text-base lg:text-lg text-black">
            {item.val}
          </p>
        </div>
      ))}
    </div>
  );
}
