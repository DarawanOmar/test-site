import { cards } from "@/constants";
import Image from "next/image";

function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-24">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm flex flex-col gap-3 p-3 justify-center items-center max-w-[240px] max-sm:max-w-full"
        >
          <Image
            src={card.image}
            alt="Card Image"
            className="h-[70px] w-[80px] mx-auto"
          />
          <h1 className="font-bold text-xl">{card.title}</h1>
          <p className="text-center text-sm text-gray-500">
            {card.description}
          </p>
          <h1>{card.link}</h1>
        </div>
      ))}
    </div>
  );
}

export default Cards;
