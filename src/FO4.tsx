import "./App.css";

//@ts-ignore
export default function FO4({ children, isActive = true }) {
  if (isActive) {
    return (
      <section className='bg-[url("./images/fo4-box.png")] bg-top h-full bg-no-repeat md:bg-cover flex justify-center p-2'>
        {/* {children} */}
        <div className="border-6 border-four-300 bg-black flex p-2 h-30 items-center">
          <p className="text-2xl text-center text-white">Coming soon!</p>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}
