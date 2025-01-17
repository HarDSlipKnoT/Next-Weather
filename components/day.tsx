import { IDaily } from "@/app/lib/defenetions";
import {
  formatWeek,
  formatDay,
  formatMonth,
  descriptionImage,
} from "@/helpers/formatData";
import Image from "next/image";

export default function Day({ day, i }: { day: IDaily; i: number }) {
  return (
    <div className="p-3 max-h-60 rounded-xl bg-secondary shadow-lg hover:-translate-y-2 transition-transform duration-200 ">
      <h4 className="mb-1 text-lg font-medium">
        {i === 0 ? "Cегодня" : i === 1 ? "Завтра" : formatWeek(day.dt)}
      </h4>
      <p>
        {formatDay(day.dt)} {formatMonth(day.dt)}
      </p>
      <Image
        src={descriptionImage(day.weather[0].description)}
        alt="Descriptrion Image"
        width={43}
        height={43}
        className="w-auto h-auto my-3"
      />
      <p className="mb-1 text-lg font-medium">{Math.round(day.temp.day)}°</p>
      <p className="text-gray-400 text-sm">{Math.round(day.feels_like.day)}°</p>
      <p className="text-gray-400 text-sm">{day.weather[0].description}</p>
    </div>
  );
}
