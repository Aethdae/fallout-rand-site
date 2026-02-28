import "./App.css";

//@ts-ignore
export default function FO3({ children, isActive = true }) {
  if (isActive) {
    return (
      <section className='bg-[url("./images/fo3.png")] bg-top h-full bg-no-repeat md:bg-cover flex justify-center p-2'>
        {children}
      </section>
    );
  } else {
    return <></>;
  }
}
