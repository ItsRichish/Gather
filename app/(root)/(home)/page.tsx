import MeetingTypeList from "@/components/MeetingTypeList";

const HomePage = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <div className="w-full h-[300px] rounded-[20px] bg-cover bg-hero">
        <div className="flex justify-between flex-col h-full max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] py-2 rounded text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl lg:text-7xl">{time}</h1>

            <p className="font-medium text-lg text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default HomePage;
