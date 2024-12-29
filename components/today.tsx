import Image from "next/image";
import { descriptionImage } from "@/helpers/formatData";
interface Props {
  cityName: string;
  cityTime: number;
  temp: number;
  description: string;
}
// sm:justify-between
export default function Today({
  cityName,
  cityTime,
  temp,
  description,
}: Props) {
  return (
    <div className="p-3 rounded-[20px] shadow-lg md:col-span-5 md:px-5 lg:px-10 ">
      <div className="flex items-center lg:justify-between  mb-8">
        <div>
          <p className="text-8xl font-medium text-main  ">{temp}°</p>
          <p className="text-4xl text-black">Сегодня</p>
        </div>
        <Image
          src={descriptionImage(description)}
          alt="Sun"
          width={120}
          height={120}
          className="h-24 w-24"
        />
      </div>
      <div className="space-y-4 text-2xl text-gray-400">
        <p className=""> Время: {cityTime}</p>
        <p>Город: {cityName}</p>
      </div>
    </div>
  );
}
