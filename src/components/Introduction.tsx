import Image from "next/image";
import { RiTiktokLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Chonburi } from "next/font/google";
import { motion } from "motion/react";

const chonburi = Chonburi({
  weight: "400",
  subsets: ["latin"],
});

export default function Introduction() {
  return (
    <div
      className={
        "flex flex-col items-center w-full lg:flex-row px-5 gap-10 lg:gap-0 text-center lg:text-left"
      }
    >
      <div className={"flex-1"}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-7xl lg:text-8xl font-bold curved-underline inline-block text-primary ${chonburi.className}`}
        >
          TIARA
        </motion.div>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={"mt-7 text-4xl lg:text-5xl leading-10 lg:leading-14 text-neutral-600"}
        >
          <span className={"inline mb-1.5"}>
            <span className={"pt-3 -pb-3 px-1.5 rotated-bg leading-10 lg:leading-12 mb-2 lg:mb-0"}>Authentic, soft-toned</span>{" "}
            UGC{" "}
          </span>
          for <b className={"text-black"}>beauty</b>, <b className={"text-black"}>food</b>, &{" "}
          <b className={"text-black"}>lifestyle</b> <span>brands - and beyond!</span>
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={
            "flex flex-1 items-center justify-center lg:justify-start gap-5 text-md tracking-wide font-semibold mt-5 text-primary"
          }
        >
          <a
            href={"https://www.tiktok.com/@tiaraxugc"}
            target={"_blank"}
            className={
              "flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500 -mr-[5.5px]"
            }
          >
            <RiTiktokLine size={40} />
          </a>
          <a
            href={"https://www.instagram.com/tiaraxugc"}
            target={"_blank"}
            className={
              "flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500"
            }
          >
            <FaInstagram size={40} />
          </a>
          <a
            href={"https://www.youtube.com/@asmrARA"}
            target={"_blank"}
            className={
              "flex items-center hover:cursor-pointer rounded-full p-1 hover:bg-primary hover:text-white transition duration-500"
            }
          >
            <AiOutlineYoutube size={45} />
          </a>
          <a
            href={"mailto:tiaraxugc@gmail.com"}
            className={
              "flex items-center hover:cursor-pointer rounded-full p-1.5 hover:bg-primary hover:text-white transition duration-500"
            }
          >
            <HiOutlineMail size={40} />
          </a>
        </motion.div>
      </div>

      <div className={"flex-1 flex items-center justify-end"}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={
            "w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] rounded-full overflow-hidden relative"
          }
        >
          <Image src={"/images/tiara.png"} alt={"tiara"} fill priority className={"object-cover"} />
        </motion.div>
      </div>
    </div>
  );
}
