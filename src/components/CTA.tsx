export default function CTA() {
  const clickHandler = () => {
    window.location.href = "mailto:tiaraxugc@gmail.com";
  };

  return (
    <div className={"w-full border-t border-gray-500/50 mt-10 mx-auto"}>
      <div className={"flex items-center gap-5 justify-center mt-5"}>
        <div className={"text-xl tracking-wide"}>Ready to collaborate?</div>
        <button
          onClick={clickHandler}
          className={
            "font-bold hover:cursor-pointer rounded-3xl shadow-lg py-3 px-8 underline text-white bg-primary"
          }
        >
          Get in touch!
        </button>
      </div>
    </div>
  );
}
