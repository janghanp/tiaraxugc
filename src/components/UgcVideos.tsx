import ProductVideoItem from "@/components/ProductVideoItem";
import TitleHighlightArrow from "@/components/TitleHighlightArrow";
import { motion } from "motion/react";

export default function UgcVideos() {
  return (
    <div className={"mt-32 text-center px-10 lg:px-0"}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={"flex items-center justify-center gap-3"}
      >
        <TitleHighlightArrow direction={"left"} />
        <div className={"text-4xl lg:text-5xl font-bold text-primary"}>UGC video examples</div>
        <TitleHighlightArrow direction={"right"} />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={"flex flex-col items-center lg:flex-row w-full gap-5 mt-10 text-secondary"}
      >
        <ProductVideoItem
          videoSrc={"/videos/intro_tiaraxUGC.mp4"}
          title1={"Intro"}
          title2={"Behind the screens"}
          description={"The cozy creator bringing your brand to life!"}
        />
        <ProductVideoItem
          videoSrc={"/videos/manta_weighted_sleep_mask.mp4"}
          title1={"Lifestyle integration"}
          title2={"Home"}
          description={"Integrates product into daily life, highlighting features"}
        />
        <ProductVideoItem
          videoSrc={"/videos/hask_hair_oil_mist.mov"}
          title1={"Problem/solution"}
          title2={"Haircare"}
          description={"Brings awareness to and highlights benefits of the product"}
        />
        <ProductVideoItem
          videoSrc={"/videos/funday_sweets.mov"}
          title1={"Testimonial/review"}
          title2={"Food & drink"}
          description={"Honest taste test with soft spoken vibes for casual UGC"}
        />
        <ProductVideoItem
          videoSrc={"/videos/benzac_ac_post_acne_serum.mov"}
          title1={"Problem/solution"}
          title2={"Skincare"}
          description={
            "Highlights a common skincare concern and offers a solution with key product benefits"
          }
        />
      </motion.div>
    </div>
  );
}
