import ServiceItem from "@/components/ServiceItem";
import Star from "@/components/Star";
import { motion } from "motion/react";

export default function Services() {
  return (
    <div className={"mt-32 text-center"}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={"w-full flex flex-col items-center relative"}
      >
        <div className={"text-5xl font-bold text-primary"}>Services</div>
        <div className={"text-secondary mt-1 text-xl"}>
          Something else in mind? Feel free to ask!
        </div>
        <div className={"absolute top-10 right-30"}>
          <Star />
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={"grid grid-cols-2 mt-16 gap-20"}
      >
        <div className={"col-span-1"}>
          <div className={"text-left text-2xl font-semibold text-secondary"}>UGC Videos</div>
          <div className={"grid grid-cols-3 gap-3 w-full mt-3"}>
            <ServiceItem title={"Paid ads"} />
            <ServiceItem title={"Unboxing"} />
            <ServiceItem title={"Problem/solution"} />
            <ServiceItem title={"Organic content"} />
            <ServiceItem title={"Testimonial/review"} />
            <ServiceItem title={"How-to/demo"} />
          </div>
        </div>
        <div className={"col-span-1"}>
          <div className={"text-left text-2xl font-semibold text-secondary"}>Add-ons</div>
          <div className={"grid grid-cols-3 gap-3 w-full mt-3"}>
            <ServiceItem title={"Scriptwriting"} />
            <ServiceItem title={"Whitelisting"} />
            <ServiceItem title={"Voiceover"} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
