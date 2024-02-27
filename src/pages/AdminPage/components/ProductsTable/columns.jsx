import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { LuEye } from "react-icons/lu";

export const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center py-2 px-3 -my-2 -mx-3 hover:bg-gray-100"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center py-2 px-3 -my-2 -mx-3 hover:bg-gray-100"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center py-2 px-3 -my-2 -mx-3 hover:bg-gray-100"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: (a) => "$" + a.getValue(),
  },
  {
    accessorKey: "purchases",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center py-2 px-3 -my-2 -mx-3 hover:bg-gray-100"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Purchases
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="font-medium flex gap-2">
          <Button variant="outline" className="text-xl p-2">
            <LuEye />
          </Button>
          <Button variant="outline" className="text-xl p-2">
            <HiOutlinePencilAlt />
          </Button>
          <Button variant="outline" className="text-lg p-2">
            <FaRegTrashAlt />
          </Button>
        </div>
      );
    },
  },
];
