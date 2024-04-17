import CallList from "@/components/CallList";

const RecordingsPage = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white">
      <h1 className="font-bold text-3xl">Recording</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default RecordingsPage;
