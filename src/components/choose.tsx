import { chooseItems } from "@/constants";
import food from "@/public/foods/food.svg";

import Image from "next/image";
import { ChooseItem } from "./choose-item";

function Choose() {
  return (
    <div className="flex justify-between mt-24">
      <Image
        src={food}
        alt="Food"
        className="w-[500px] h-[500px] max-sm:w-[300px] max-sm:h-[300px] max-xl:w-[450px] max-xl:h-[450px] max-lg:hidden"
      />
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-2xl sm:text-3xl xl:text-5xl mb-5">
          Why People Choose us?
        </h1>
        {chooseItems.map((item, index) => (
          <ChooseItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Choose;
