import "./App.css";

//@ts-ignore
export default function FO4({ children, isActive = true }) {
  if (isActive) {
    return (
      <section className='bg-[url("./images/fo4-box.png")] bg-top h-full bg-no-repeat md:bg-cover flex justify-center p-2'>
        {children}
      </section>
    );
  } else {
    return <></>;
  }
}
