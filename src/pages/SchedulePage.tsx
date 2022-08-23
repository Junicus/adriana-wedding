import { schedule, weddingInfo } from "../constants";
import { styles } from "../styles";

export function SchedulePage() {
  return (
    <section className={`${styles.paddingY} flex flex-col`}>
      {schedule.events.map((event) => {
        return (
          <div
            key={event.display}
            className={`${styles.paddingY} flex flex-col sm:flex-row justify-around`}
          >
            <div
              className={`${styles.paddingY} flex flex-col items-center border-r border-gray-400 flex-1 gap-5`}
            >
              <p className="text-2xl uppercase tracking-widest">
                {event.display}
              </p>
              <p className="tracking-widest">
                {event.time.format("dddd, MMMM D, YYYY")}
              </p>
              <p className="tracking-widest">{event.time.format("h:mm a")}</p>
            </div>
            <div className="flex flex-col items-center flex-1">
              <img className="h-26 w-26" src={event.icon} alt={event.display} />
              {weddingInfo.location}
            </div>
          </div>
        );
      })}
    </section>
  );
}
