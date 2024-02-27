import clsx from "clsx";

export default function Tabs({ tabs, state }) {
  const { activeTab, setActiveTab } = state;

  return (
    <div className="p-2">
      {tabs.map((category, index) => {
        return (
          <button
            key={index}
            className={clsx(
              "block p-2 rounded-md px-3 w-full text-left font-medium",
              activeTab === index
                ? "border bg-black text-white"
                : "hover:bg-gray-200"
            )}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
