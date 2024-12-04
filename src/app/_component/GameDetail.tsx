import RoundAccordion from "./detail/RoundAccordion";
import GameImage from "./detail/GameImage";

export default function GameDetail() {
  return (
    <>
      <RoundAccordion rating={9.5} weight={4} player={[2, 8]} time={240} />
      <div className="ld-static bg-lightbg-0/75 dark:bg-darkbg-0/75 absolute p-10px bottom-20px left-1/2 -translate-x-1/2 text-20px rounded-full z-[3]">
        {"Splendor"}
      </div>
    </>
  );
}

/*

*/
