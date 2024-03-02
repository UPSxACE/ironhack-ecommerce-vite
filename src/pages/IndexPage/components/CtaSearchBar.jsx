import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function CtaSearchBar() {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    navigate("/search/" + query);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border border-gray-400 h-[3rem] sm:h-[3.75rem] rounded-xl text-black py-2 px-2 pl-4 flex"
    >
      <input
        id="query-cta"
        name="query"
        type="text"
        className="min-w-[100px] h-full flex-1 pr-3 outline-none text-lg sm:text-xl"
        placeholder="What are you looking for?"
      />
      <div className="h-[2rem] w-[2rem] sm:h-[2.75rem] sm:w-[2.75rem] p-[0.4rem] bg-mainBlack rounded-xl">
        <IoSearch className="h-full w-full  fill-white" />
      </div>
    </form>
  );
}
