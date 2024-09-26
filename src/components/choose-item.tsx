import Image from "next/image";
type ChooseItemProps = {
  icon: string;
  title: string;
  description: string;
};

export function ChooseItem({ icon, title, description }: ChooseItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-x border-b flex justify-between items-center p-4 gap-5">
      <div className="bg-white rounded-full p-3 shadow-md">
        <Image
          src={icon}
          alt={title}
          className="shadow-2xl"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-wide max-sm:text-base">
          {title}
        </h1>
        <p className="max-w-md sm:max-w-full lg:max-w-md text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
