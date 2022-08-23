import { EventSection, Hero } from "../components";
import { styles } from "../styles";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center flex-1">
      <Hero />
      <EventSection />

      <div className={`${styles.padding} flex flex-col items-center w-full`}>
        <p className="font-livishly text-4xl">How We Met</p>
        <p className="font-noto font-semibold text-xl">
          4.<span className="text-2xl">23</span>.14
        </p>
        <p className="max-w-md text-center pt-4">
          We met at a classmate’s party and didn’t think much of it. Then a
          bunch of us went to karaoke after a long day of back-to-back classes
          and we both picked, “I’d Do Anything for Love.” And it just clicked.
          He went low, I went high. There were fist pumps. We harmonized by
          accident. That’s pretty much when we thought, “Okay. This could be
          something.”
        </p>
      </div>
      <div className={`${styles.padding} flex flex-col items-center w-full`}>
        <p className="font-livishly text-4xl">The Proposal</p>
        <p className="font-noto font-semibold text-xl">
          4.<span className="text-2xl">23</span>.17
        </p>
        <p className="max-w-md text-center pt-4">
          On the anniversary of when we first met, we went back to our old
          stomping grounds to do karaoke with friends. When "I'd Do Anything for
          Love" came on, we ran up to the front. When the music suddenly died
          down, I looked over and he was down on one knee. I screamed, shouted
          "YES," and we were engaged.
        </p>
        <p className="max-w-md text-center">
          We're so excited to celebrate this next chapter in our lives with you.
        </p>
        <p className="max-w-md text-center">See you in San Fran!</p>
      </div>
    </div>
  );
}
