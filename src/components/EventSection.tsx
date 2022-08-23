import { weddingInfo } from "../constants";
import { styles } from "../styles";
export function EventSection() {
  return (
    <section className={`${styles.padding} flex flex-col items-center`}>
      <p className="text-2xl sm:text-5xl">
        {weddingInfo.date.format("M")} | {weddingInfo.date.format("D")} |{" "}
        {weddingInfo.date.format("YYYY")}
      </p>
      <p className="py-8 uppercase sm:tracking-widest text-sm sm:text-base">
        {weddingInfo.location}
      </p>
    </section>
  );
}
