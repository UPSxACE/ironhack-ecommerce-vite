import { IoSearch } from "react-icons/io5";

export default function IndexPage() {
  return (
    <div className="min-h-[calc(100vh-60px)] px-12 py-4 flex flex-col items-center">
      <div className="max-w-screen-lg w-full">
        <section
          id="cta"
          className="bg-[var(--main-black)] text-white px-20 py-12 grid grid-cols-[60%_auto] gap-12 rounded-[1.1rem]"
        >
          <div className="flex flex-col justify-between">
            <h1 className="text-6xl font-bold">
              The best deals, the latest trends
            </h1>
            <div className="grid grid-cols-[auto_101px_auto]">
              <article>
                <h2 className="text-4xl mb-1">1200+</h2>
                <span className="text-xl">Active Buyers</span>
              </article>
              <div className="h-full bg-white mx-[50px]" />
              <article>
                <h2 className="text-4xl mb-1">20M+</h2>
                <span>Shipped Products</span>
              </article>
            </div>
            <div className="bg-white border border-gray-400 h-[3.75rem] rounded-xl text-black py-2 px-3 flex">
              <input
                type="text"
                className="h-full flex-1 pr-3 outline-none text-xl"
              />
              <div className="h-[2.75rem] w-[2.75rem] p-[0.5rem] bg-[var(--main-black)] rounded-xl">
                <IoSearch className="h-full w-full  fill-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="/public/cta-image.png"
              className="max-h-[400px]"
              alt="Trendy product"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
