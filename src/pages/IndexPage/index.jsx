import Cta from "./components/Cta";

export default function IndexPage() {
  return (
    <div className="min-h-[calc(100vh-60px)] px-12 py-4 flex flex-col items-center">
      <div className="max-w-screen-lg w-full">
        <Cta />
      </div>
    </div>
  );
}
