type Info = {
  rating: number;
  weight: number;
  player: [number, number];
  time: number;
};

function Rating({ rating }: { rating: number }) {
  if (rating >= 9) {
    return (
      <div className="round-text-icon text-16px text-blue-500 border-blue-500">
        {`${Math.round(rating * 10)}%`}
      </div>
    );
  } else if (rating >= 8) {
    return (
      <div className="round-text-icon text-16px text-green-500 border-green-500">
        {`${Math.round(rating * 10)}%`}
      </div>
    );
  } else if (rating >= 7) {
    return (
      <div className="round-text-icon text-16px text-yellow-500 border-yellow-500">
        {`${Math.round(rating * 10)}%`}
      </div>
    );
  } else {
    return (
      <div className="round-text-icon text-16px text-red-500 border-red-500">
        {`${Math.round(rating * 10)}%`}
      </div>
    );
  }
}

function Level({ weight }: { weight: number }) {
  if (weight === 1) {
    return (
      <div className="round-text-icon text-12px leading-12px text-purple-300 border-purple-300">
        {"VERY\nEASY"}
      </div>
    );
  } else if (weight === 2) {
    return (
      <div className="round-text-icon text-14px text-purple-400 border-purple-400">
        {"EASY"}
      </div>
    );
  } else if (weight === 3) {
    return (
      <div className="round-text-icon text-13px leading-12px text-purple-500 border-purple-500">
        {"NOR\nMAL"}
      </div>
    );
  } else if (weight === 4) {
    return (
      <div className="round-text-icon text-13px text-purple-700 border-purple-700">
        {"HARD"}
      </div>
    );
  } else if (weight === 5) {
    return (
      <div className="round-text-icon text-12px leading-12px text-purple-900 border-purple-900">
        {"VERY\nHARD"}
      </div>
    );
  } else {
    return (
      <div className="round-text-icon text-13px leading-12px text-red-800 border-red-800">
        {"EXTR\nEME"}
      </div>
    );
  }
}

export default function RoundAccordion({ rating, weight, player, time }: Info) {
  return (
    <div className="shadow-sm absolute top-10px left-10px w-56px h-56px p-4px rounded-30px bg-gray-300/60 z-[3] flex flex-col gap-8px hover:h-224px overflow-hidden cursor-pointer">
      <Rating rating={rating} />
      <Level weight={weight} />
      <div className="round-text-icon text-13px leading-13px text-cyan-700 border-cyan-700">
        {player[0] === player[1]
          ? `👤\n${player[0]}`
          : `👤\n${player[0]}~${player[1]}`}
      </div>
      <div className="round-text-icon text-14px leading-12px text-gray-500 border-gray-500">
        {`${time}\nmin`}
      </div>
    </div>
  );
}
