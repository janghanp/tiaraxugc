export default function StickyCTAButton() {
  const clickHandler = () => {
    window.location.href = "mailto:tiaraxugc@gmail.com";
  };

  return (
    <button
      onClick={clickHandler}
      className={
        "font-bold hover:cursor-pointer rounded-3xl shadow-lg py-3 px-8 underline text-white bg-primary fixed bottom-5 right-5 hover:bg-secondary transition duration-300"
      }
    >
      Get in touch!
    </button>
  );
}
