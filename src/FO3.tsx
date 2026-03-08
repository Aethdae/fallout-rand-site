import "./App.css";
import RandClass from "./RandClass";

//@ts-ignore
export default function FO3({ children, randomized, showClass }) {
  return (
    <section className='flex bg-[url("./images/fo3.png")] bg-top h-full bg-no-repeat md:bg-cover flex-col items-center p-2'>
      {children}
      {showClass && <RandClass randomized={randomized} />}
    </section>
  );
}
