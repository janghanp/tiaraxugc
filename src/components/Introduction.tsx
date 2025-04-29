import Image from "next/image";
import { RiTiktokLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Chonburi } from "next/font/google";

const chonburi = Chonburi({
  weight: "400",
  subsets: ["latin"],
});

export default function Introduction() {
  return (
    <div className={"flex items-center w-full"}>
      <div className={"flex-1"}>
        <div className={`text-8xl font-bold curved-underline inline-block text-gray-900 ${chonburi.className}`}>TIARA</div>

        <p className={"mt-7 text-4xl leading-14  text-neutral-600"}>
          <span className={"px-2"}>
            <span className={"rotated-bg p-2"}>Authentic, soft-toned</span>
            UGC
          </span>
          for <b className={"text-black"}>beauty</b>, <b className={"text-black"}>food</b>, &{" "}
          <b className={"text-black"}>lifestyle</b> <span>brands - and beyond!</span>
        </p>
        <div
          className={
            "flex flex-1 items-center justify-start gap-5 text-md tracking-wide font-semibold mt-5 text-primary"
          }
        >
          <a href={"https://www.tiktok.com/@tiaraxugc"} target={"_blank"} className={"flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500 -mr-[5.5px]"}>
            <RiTiktokLine size={40} />
          </a>
          <a href={"https://www.instagram.com/tiaraxugc"} target={"_blank"} className={"flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500"}>
            <FaInstagram size={40} />
          </a>
          <a href={"https://www.youtube.com/@asmrARA"} target={"_blank"} className={"flex items-center hover:cursor-pointer rounded-full p-1 hover:bg-primary hover:text-white transition duration-500"}>
            <AiOutlineYoutube size={45} />
          </a>
          <a href={"mailto:tiaraxugc@gmail.com"} className={"flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500"}>
            <HiOutlineMail size={40} />
          </a>
        </div>
      </div>
      <div className={"flex-1 flex items-center justify-center"}>
        <div className={"w-[450px] h-[450px] rounded-full overflow-hidden relative"}>
          <Image src={"/images/tiara.png"} alt={"tiara"} fill priority className={"object-cover"} />
        </div>
      </div>
    </div>
  );
}
