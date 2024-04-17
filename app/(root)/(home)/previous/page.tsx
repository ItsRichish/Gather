import CallList from "@/components/CallList";

const PreviousPage = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white">
      <h1 className="font-bold text-3xl">Previous</h1>

      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;
