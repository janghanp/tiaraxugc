interface Props {
  title: string;
}

export default function ServiceItem({ title }: Props) {
  return (
    <div
      className={
        "bg-white shadow-sm rounded-4xl py-4 text-center col-span-1 border hover:cursor-default"
      }
    >
      {title}
    </div>
  );
}
