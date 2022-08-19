import { EventSection, Hero } from "../components";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center flex-1">
      <Hero />
      <EventSection />
      <p className="font-noto font-semibold text-xl">
        4.<span className="text-2xl">23</span>.17
      </p>
      <p className="max-w-md text-center">
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
  );
}
