import { weddingInfo } from "../constants";
import { styles } from "../styles";
export function EventSection() {
  return (
    <section className={`${styles.paddingY} flex flex-col items-center`}>
      <p className="text-5xl">
        {weddingInfo.date.format("M")} | {weddingInfo.date.format("D")} |{" "}
        {weddingInfo.date.format("YYYY")}
      </p>
      <p className="py-8 uppercase tracking-widest">{weddingInfo.location}</p>
    </section>
  );
}
