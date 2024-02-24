import LoadingSpinner from "@/components/LoadingSpinner";
import ScreenOverlay from "@/components/ScreenOverlay";
import useOverlay from "@/components/ScreenOverlay/use-screen-overlay";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState(0);

  const overlay = useOverlay(true);
  const data = useLoaderData();

  const tabs = ["Cellphones", "Monitors", "Gaming", "Accessories"];

  useEffect(() => {
    setTimeout(() => {
      overlay.close();
    }, 300);
  }, []);

  return (
    <div className="min-h-screen flex items-stretch">
      <ScreenOverlay {...overlay} notCloseable>
        <div className="h-full w-full flex justify-center items-center">
          <LoadingSpinner className="text-white border-[6px] h-[50px] w-[50px]" />
        </div>
      </ScreenOverlay>
      <div className="w-[300px] bg-gray-50">
        <div className="flex justify-center items-center h-[40px]">
          <h1 className="font-semibold">Welcome {data.username}!</h1>
        </div>
        <Separator />
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
      </div>
      <Separator orientation="vertical" className="h-auto" />
      <div className="flex flex-col"></div>
    </div>
  );
}
