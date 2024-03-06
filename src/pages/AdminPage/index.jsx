import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsTable from "./components/ProductsTable";
import Tabs from "./components/Tabs";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState(0);

  const data = useLoaderData();

  const tabs = ["Cellphones", "Monitors", "Gaming", "Accessories"];

  const dataUrl = `products?userId=${
    import.meta.env.VITE_STORE_OWNER_ID
  }&categoryId=${activeTab + 1}&_embed=rates&_sort=id&_order=asc`;

  return (
    <div className="min-h-screen flex items-stretch">
      <div className="w-[300px] bg-gray-50">
        <div className="flex justify-center items-center h-[40px]">
          <h1 className="font-semibold">Welcome {data.username}!</h1>
        </div>
        <Separator />
        <Tabs tabs={tabs} state={{ activeTab, setActiveTab }} />
      </div>
      <Separator orientation="vertical" className="h-auto" />
      <div className="flex flex-col flex-1 p-12">
        <ProductsTable dataUrl={dataUrl} />
      </div>
    </div>
  );
}
