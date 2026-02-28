import "./App.css";

//@ts-ignore
export default function FNV({ children, isActive = true }) {
  if (isActive) {
    return (
      <section className='bg-[url("./images/fnv-box.png")] bg-top h-full bg-no-repeat md:bg-cover flex justify-center p-2'>
        {children}
      </section>
    );
  } else {
    return <></>;
  }
}
