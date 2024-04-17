"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { avatarImages } from "@/constants";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick?: () => void;
  link: string;
}

const MeetingCard = ({
  title,
  date,
  icon,
  isPreviousMeeting,
  buttonIcon1,
  buttonText,
  handleClick,
  link,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex flex-col justify-between min-h-[258px] w-full px-5 py-8 rounded-[14px] bg-dark-1 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-base font-normal">{date}</p>
        </div>
      </article>

      <article className="relative flex justify-center">
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, idx) => (
            <Image
              key={idx}
              className={cn("rounded-full", { absolute: idx > 0 })}
              src={img}
              alt={"avatars"}
              width={40}
              height={40}
              style={{ top: 0, left: idx * 28 }}
            />
          ))}

          <div className="flex-center absolute left-[136px] bg-dark-4 size-10 rounded-full border-[5px] border-dark-3">
            +5
          </div>
        </div>

        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button className="px-6 bg-blue-1 rounded" onClick={handleClick}>
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>

            <Button
              className="px-6 bg-dark-4"
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link copied to clipboard",
                });
              }}
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
