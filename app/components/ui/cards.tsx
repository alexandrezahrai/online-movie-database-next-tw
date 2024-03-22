import { FaStar, FaRegStar, FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import Bookmark from "@/app/components/svg/Bookmark";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Video from "./video-component";
import { AspectRatio } from "./aspect-ratio";

export function CardVertical({
  image,
  href,
  title,
  rating,
}: {
  image: string;
  href: string;
  title: string;
  rating: number;
}) {
  return (
    <div className="group flex w-full md:max-w-[228px] flex-col gap-[18px] rounded-[10px] border-none bg-[#1A1A1A] p-3">
      <div className="relative h-[500px] sm:h-[298px] w-full overflow-clip rounded-t-[5px]">
        <button className="absolute top-0 left-3">
          <Bookmark />
        </button>
        <img
          src={image}
          alt="poster"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 top-auto h-[100px] bg-gradient-to-b from-transparent via-[#1a1a1a7c] to-[#1A1A1A]"></div>
      </div>
      <div className="flex flex-col items-start justify-center gap-6">
        <Link
          href={href}
          className="line-clamp-1 text-[20px] leading-[1.2] text-[#C3C3C3]"
        >
          {title}
        </Link>
        <div className="flex w-full items-center justify-between px-1">
          <div className="inline-flex items-center gap-2">
            <FaStar className="text-golden w-[18px] h-[18px]" />
            <span className="text-[18px] leading-none tracking-normal text-[#C3C3C3]">
              {Math.round(rating * 10) / 10}
            </span>
          </div>

          <button className="inline-flex items-center gap-2">
            <FaRegStar className="text-[#C3C3C3] w-[18px] h-[18px]" />
            <span className="text-[18px] leading-none tracking-normal text-[#C3C3C3]">
              Rate
            </span>
          </button>

          <button>
            <IoIosInformationCircle className="text-[rgba(121,121,121,1)] w-5 h-5" />
          </button>
        </div>
        <Dialog>
          <DialogTrigger className="just flex w-full items-center gap-3 overflow-clip rounded-[10px] bg-[rgba(163,163,163,0.05)] px-[18px] py-[9px] text-[16px] leading-[175%] text-[#C3C3C3] transition-colors duration-150 ease-in [box-shadow:inset_0_2px_1px_0_rgb(255_255_255/0.08)] hover:bg-[rgba(163,163,163,0.15)]">
            <FaPlay className="h-[18px] w-[18px]" />
            View Trailer
          </DialogTrigger>
          <DialogContent className="w-[700px]">
            <AspectRatio ratio={16 / 9}>
              <div className="overflow-clip w-full rounded-[10px] h-full">
                <Video width="100%" height="100%" trailerKey="dQw4w9WgXcQ" />
                {/* TODO: add trailer key prop */}
              </div>
            </AspectRatio>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export function CardHorizontal({
  rank,
  image,
  title,
  rating,
  year,
  age,
  runtime,
}: {
  rank: number;
  image: string;
  title: string;
  rating: number;
  year?: number;
  age?: string;
  runtime?: string;
}) {
  return (
    <div className="bg-[rgba(163,163,163,0.05)] rounded-xl overflow-clip p-5 max-w-[752px]">
      <div className="flex items-start justify-start gap-[19px]">
        <div className="flex gap-3">
          <div className="text-[28px] text-[#C3C3C3]">{rank}</div>
          <div className="h-10 w-1 rounded-full bg-golden"></div>
        </div>
        <div className="relative h-[500px] w-full md:h-[194px] md:w-[126px] overflow-clip rounded-[5px] flex-shrink-0">
          <button className="absolute top-0 left-3">
            <Bookmark />
          </button>
          <img
            src={image}
            alt="poster"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[18px] font-semibold leading-[1.2] text-[#C3C3C3] max-w-[250px] line-clamp-1 w-full">
              {title}
            </h2>
            <div className="flex w-full items-center justify-end gap-6">
              <div className="inline-flex items-center gap-2">
                <FaStar className="text-golden w-[18px] h-[18px]" />
                <span className="text-[18px] leading-none tracking-normal text-[#C3C3C3]">
                  {rating}
                </span>
              </div>

              <button className="inline-flex items-center gap-2">
                <FaRegStar className="text-[#C3C3C3] w-[18px] h-[18px]" />
                <span className="text-[18px] leading-none tracking-normal text-[#C3C3C3]">
                  Rate
                </span>
              </button>

              <button>
                <IoIosInformationCircle className="text-[rgba(121,121,121,1)] w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-[#797979] text-[16px] flex items-center justify-start gap-2">
            <span>{year}</span>|<span>{age}</span>|<span>{runtime}</span>
          </div>

          <div className="flex items-center justify-start gap-3">
            <button className="rounded-full overflow-clip shadow bg-[rgba(163,163,163,0.15)] text-[#C3C3C3] text-[16px] px-[18px] py-[7px] leading-[175%]">
              Action
            </button>
            <button className="rounded-full overflow-clip shadow bg-[rgba(163,163,163,0.15)] text-[#C3C3C3] text-[16px] px-[18px] py-[7px] leading-[175%]">
              Adventure
            </button>
            <button className="rounded-full overflow-clip shadow bg-[rgba(163,163,163,0.15)] text-[#C3C3C3] text-[16px] px-[18px] py-[7px] leading-[175%]">
              Drama
            </button>
          </div>

          <p className="text-[#C3C3C3] text-[16px] text-left line-clamp-3">
            A look at three defining chapters in the life of Chiron, a young
            black man growing up in Miami. His epic journey to manhood is guided
            by the kindness, support and love of the community that helps raise
            him.
          </p>
        </div>
      </div>
    </div>
  );
}
