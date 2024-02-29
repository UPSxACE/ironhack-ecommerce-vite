import { IoSearch } from "react-icons/io5";

export default function Cta() {
  return (
    <section
      id="cta"
      className="bg-mainBlack text-white px-6 py-6 sm:px-20 sm:py-12 grid grid-cols-[100%] lg:grid-cols-[60%_auto] gap-12 rounded-[1.1rem]"
    >
      <div className="flex flex-col gap-5 sm:gap-8 justify-between">
        <h1 className="text-4xl sm:text-6xl font-bold">
          The best deals, the latest trends
        </h1>
        <div className="grid grid-cols-[auto_61px_auto] xs:grid-cols-[auto_101px_auto]">
          <article>
            <h2 className="text-2xl sm:text-4xl mb-1">1200+</h2>
            <span className="text-md sm:text-xl">Active Buyers</span>
          </article>
          <div className="h-full bg-white mx-[30px] xs:mx-[50px]" />
          <article>
            <h2 className="text-2xl sm:text-4xl mb-1">20M+</h2>
            <span className="text-md sm:text-xl">Shipped Products</span>
          </article>
        </div>
        <div className="bg-white border border-gray-400 h-[3rem] sm:h-[3.75rem] rounded-xl text-black py-2 px-2 flex">
          <input
            type="text"
            className="min-w-[100px] h-full flex-1 pr-3 outline-none text-lg sm:text-xl"
            placeholder="What are you looking for?"
          />
          <div className="h-[2rem] w-[2rem] sm:h-[2.75rem] sm:w-[2.75rem] p-[0.4rem] bg-mainBlack rounded-xl">
            <IoSearch className="h-full w-full  fill-white" />
          </div>
        </div>
      </div>
      <div className="justify-end hidden lg:flex">
        <img
          src="/cta-image.png"
          className="max-h-[400px] h-[1988px]"
          alt="Trendy product"
        />
      </div>
    </section>
  );
}
