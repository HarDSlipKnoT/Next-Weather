import { IDaily } from "@/app/lib/defenetions";
import Day from "./day";

export default function Week({ daysArr }: { daysArr: IDaily[] }) {
  const week = daysArr.slice(0, 7);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-7 mt-10">
      {week.map((day, i) => (
        <Day key={i} day={day} i={i} />
      ))}
    </div>
  );
}
