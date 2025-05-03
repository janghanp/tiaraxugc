import Image from "next/image";
import { motion } from "motion/react";

export default function TrustedBy() {
  return (
    <div className={"mt-32 text-center"}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={"text-5xl font-bold text-primary"}
      >
        Trusted by...
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={"w-ful flex items-center justify-center gap-10 mt-5"}
      >
        <div>
          <Image
            src={"/images/heaps_good_spirits.png"}
            alt={"heaps_good_spirits"}
            width={150}
            height={150}
          />
        </div>
        <div className={"flex flex-col text-xl"}>
          <div>“We love this!” </div>
          <div className={"font-bold"}>- Benzac team, TikTok</div>
        </div>
        <div>
          <Image src={"/images/halara.png"} alt={"halara"} width={150} height={150} />
        </div>
      </motion.div>
    </div>
  );
}
