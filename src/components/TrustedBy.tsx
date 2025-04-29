import Image from "next/image";

export default function TrustedBy() {
  return (
    <div className={"mt-32 text-center"}>
      <div className={"text-5xl font-bold text-primary"}>Trusted by...</div>
      <div className={"w-ful flex items-center justify-center gap-10 mt-5"}>
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
      </div>
    </div>
  );
}
