import UnderlineImage from "@/components/UnderlineImage";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <div className={"w-full mt-32"}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={"text-4xl lg:text-5xl font-bold text-primary text-center mb-10"}
      >
        About me
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={
          "w-full max-w-[850px] mx-auto text-2xl text-primary leading-8 flex flex-col gap-7 px-10 text-center lg:text-left"
        }
      >
        <p>
          Hi! I’m Tiara — a Sydney-based content creator with a love for soft lighting, soothing
          tones, and storytelling that feels real.{" "}
        </p>
        <p>
          I specialise in user-generated content that’s casual and relatable, with a focus on
          beauty, lifestyle, food, and wellness — though I’m always open to exploring new things.
        </p>
        <p>
          Whether it’s a quiet skincare ritual, a comforting treat, or a peaceful product demo, I
          aim to create videos that feel like a friend’s recommendation.
        </p>
        <p>
          I also speak Korean and run a Korean-language ASMR YouTube channel, so if you&#39;re
          looking to connect with Korean-speaking audiences, I&#39;d love to help with that too.
        </p>
        <p>Let’s create something that genuinely connects 🤍</p>
      </motion.div>
      <div className={"w-full flex items-center justify-center mt-8 px-10"}>
        <UnderlineImage />
      </div>
    </div>
  );
}
