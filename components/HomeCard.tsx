import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "flex justify-between flex-col w-full px-4 py-6 cursor-pointer min-h-[260px] xl:max-w-[270px] rounded-[14px]",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="font-normal texlg">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
