import { SVGProps } from "react";
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={53}
    fill="none"
    className="fill-[#1A1A1A] opacity-70 hover:fill-golden hover:opacity-100 transition-all duration-100 ease-in"
    {...props}
  >
    <path fill="none" fillOpacity="none" d="M2 50.5V0h39v50.5l-18.5-7z" />
    <path
      stroke="#A3A3A3"
      strokeOpacity={0.4}
      d="M1 0v52l21.551-7.485L42 52V0"
    />
    <path
      fill="#fff"
      d="M27 23h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5h-5c-.55 0-1-.45-1-1s.45-1 1-1h5v-5c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
    />
  </svg>
);
export default Bookmark;
