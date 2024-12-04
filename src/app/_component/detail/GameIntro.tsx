type GameIntroProps = {
  title: string;
  year: number;
  introduction: string;
};

export default function GameIntro({
  title,
  year,
  introduction,
}: GameIntroProps) {
  return (
    <div className="p-12px">
      <div className="mb-6px flex items-baseline gap-10px">
        <div className="text-24px">{title}</div>
        <div>{year}</div>
      </div>
      <div className="h-160px md:h-460px pr-8px text-justify overflow-y-scroll">
        {introduction}
      </div>
    </div>
  );
}
