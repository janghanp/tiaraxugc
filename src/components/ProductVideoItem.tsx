interface Props {
  videoSrc?: string;
  title1: string;
  title2: string;
  description: string;
}

export default function ProductVideoItem({ videoSrc, title1, title2, description }: Props) {
  return (
    <div className={"flex flex-col w-full text-center items-center justify-center"}>
      {videoSrc && (
        <video
          className={"rounded-2xl shadow-2xl"}
          width={220}
          height={400}
          src={videoSrc}
          muted
          controls
          loop
          preload={"metadata"}
        />
      )}
      <div className={"mt-3 font-bold text-xl text-primary"}>{title1}</div>
      <div className={"-mt-1 text-[16px] font-semibold"}>{title2}</div>
      <div className={"mt-2 text-sm"}>
        <i>{description}</i>
      </div>
    </div>
  );
}
