import MainSection from "./_component/MainSection";

export default function Home() {
  return (
    <>
      <MainSection startScroll={0} color="red" />
      <MainSection startScroll={4800} color="yellow" />
      <MainSection startScroll={9600} color="green" />
    </>
  );
}
