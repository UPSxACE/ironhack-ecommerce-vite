import LoadingSpinner from "@/components/LoadingSpinner";
import ScreenOverlay from "@/components/ScreenOverlay";
import useOverlay from "@/components/ScreenOverlay/use-screen-overlay";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import ProductsTable from "./components/ProductsTable";
import Tabs from "./components/Tabs";
import FormAdmin from "./components/FormAdmin";

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

  const dataUrl = `products?userId=${
    import.meta.env.VITE_STORE_OWNER_ID
  }&categoryId=${activeTab + 1}&_embed=rates&_sort=id&_order=asc`;

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
        <Tabs tabs={tabs} state={{ activeTab, setActiveTab }} />
      </div>
      <Separator orientation="vertical" className="h-auto" />
      <div className="flex flex-col flex-1 p-12">
        <button>Click me</button>
        <ProductsTable dataUrl={dataUrl} />
      </div>
      <FormAdmin/>

    </div>
  );
}
