import Image from "next/image";
import heroImage from "@/public/hero-img.svg";
import text from "@/public/text.svg";
function HeroSection() {
  return (
    <section className="">
      <div className="relative">
        <div className="relative">
          <div className="absolute w-[50px] sm:w-[100px] md:w-[150px]  h-[150px] rounded-full  bg-amber-500 -top-20  left-20  blur-[150px] -z-30 " />
          <div className="absolute w-[50px] sm:w-[100px] md:w-[650px]  h-[250px] rounded-full  bg-amber-500 top-20  left-72  blur-[3150px] -z-30 " />
        </div>{" "}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-md:gap-3 ">
        <div className="flex flex-col max-md:justify-center max-md:items-center gap-3 max-w-md">
          <h1 className="text-6xl font-semibold leading-normal flex flex-col max-lg:text-4xl max-md:text-5xl max-sm:text-4xl">
            <span className="flex gap-2 items-center  ">
              Desire
              <Image
                src={text}
                alt="Food"
                className=" w-[150px]  md:w-[180px]  "
              />{" "}
            </span>
            for Your Taste
          </h1>
          <p className="max-md:text-center">
            Food is what we eat to stay alive and healthy. It comes in many
            different forms and flavors, from fruits and vegetables to meats and
            grains.
          </p>
          <button className="bg-primary text-white px-7 py-2 rounded-full max-w-max mt-4">
            Order Now
          </button>
        </div>
        <Image
          src={heroImage}
          alt="Hero Image"
          className=" h-[500px] w-[600px] max-lg:w-[500px] max-lg:h-[400px] max-sm:w-[300px] max-sm:h-[300px] "
        />
      </div>
    </section>
  );
}

export default HeroSection;
