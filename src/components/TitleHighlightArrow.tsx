interface Props {
  direction: "left" | "right";
}

export default function TitleHighlightArrow({ direction }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      viewBox="178.5 478.5 643.0 43.0"
      zoomAndPan="magnify"
      className={"fill-[#b3b4d2]"}
      width="316.2505708908995px"
      height="21.148949530806654px"
      style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
    >
      <g id="__id1_s32lkm3zl">
        <path
          d="M821.52,500l-16.67,4.81l-4.81,16.67l-4.81-16.67l-9.73-2.81H178.48v-4H785.5l9.73-2.81l4.81-16.67l4.81,16.67L821.52,500z"
          className={"fill-[#b3b4d2]"}
        />
      </g>
    </svg>
  );
}
