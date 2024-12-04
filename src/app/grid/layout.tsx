export default function GridLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col lg:flex-row">
      <div className="ld-static sticky md:fixed top-0 p-12px pt-60px w-full md:w-[25%] z-[2]">
        <div className="h-200px md:h-[calc(100dvh-60px)] p-8px text-16px text-center overflow-y-scroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dolore sit consequuntur quae facilis eos delectus quia saepe omnis
          ipsum, commodi nulla doloremque beatae consequatur praesentium dolor
          ea iure alias deserunt! Fugiat corrupti sunt earum voluptatem?
          Voluptate omnis necessitatibus dolorum voluptatem aliquam veniam
          tempore modi pariatur adipisci repellendus. Ipsa necessitatibus saepe
          repudiandae sapiente dolor! Quia reprehenderit soluta delectus qui
          earum.
        </div>
      </div>
      <div className="ld-static relative md:absolute md:right-0 w-full md:w-[75%] z-[1]">
        {children}
      </div>
    </main>
  );
}
