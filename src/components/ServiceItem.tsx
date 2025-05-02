interface Props {
  title: string;
}

export default function ServiceItem({ title }: Props) {
  return (
    <div
      className={
        "bg-white shadow-sm rounded-4xl text-[17px] py-4 text-center col-span-1 hover:cursor-default text-primary"
      }
    >
      {title}
    </div>
  );
}
