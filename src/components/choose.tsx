import food from "@/public/foods/food.svg";
import delivary from "@/public/foods/delivery.svg";
import book from "@/public/foods/book.svg";
import burger from "@/public/foods/burger.svg";
import Image from "next/image";
function Choose() {
  return (
    <div className="flex justify-between mt-24">
      <Image
        src={food}
        alt="Food"
        className="w-[500px] h-[500px] max-sm:w-[300px] max-sm:h-[300px] max-xl:w-[450px] max-xl:h-[450px]  max-lg:hidden"
      />
      <div className="flex flex-col  gap-6">
        <h1 className="font-semibold text-2xl sm:text-3xl xl:text-5xl mb-5">
          Why People Choose us?
        </h1>
        <div className="bg-white rounded-xl shadow-sm border-x border-b flex justify-between items-center p-4 gap-5">
          <div className="bg-white rounded-full p-3 shadow-md">
            <Image
              src={delivary}
              alt="Delivery"
              className="shadow-2xl"
              width={30}
              height={30}
            />
          </div>{" "}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-wide max-sm:text-base ">
              Convenient and Reliable
            </h1>
            <p className="max-w-md sm:max-w-full lg:max-w-md  text-gray-600">
              Whether you dine in, take out, or order delivery, our service is
              convenient, fast, and reliable, making mealtime hassle-free.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-x border-b flex justify-between items-center p-4 gap-5">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Image
              src={book}
              alt="Delivery"
              className="shadow-2xl "
              width={40}
              height={40}
            />
          </div>{" "}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-wide max-sm:text-base ">
              Varity of Options
            </h1>
            <p className="max-w-md sm:max-w-full lg:max-w-md  text-gray-600">
              From hearty meals to light snacks, we offer a wide range of
              options to suit every taste and craving.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-x border-b flex justify-between items-center p-4 gap-5">
          <div className="bg-white rounded-full p-3 shadow-md">
            <Image
              src={burger}
              alt="Delivery"
              className="shadow-2xl"
              width={30}
              height={30}
            />
          </div>{" "}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-wide max-sm:text-base ">
              Eat Burger
            </h1>
            <p className="max-w-md sm:max-w-full lg:max-w-md  text-gray-600">
              Our burgers are grilled to perfection, with juicy patties and
              flavorful toppings that make every bite a delicious experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
