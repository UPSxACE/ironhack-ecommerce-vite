import { Button } from "@/components/ui/button";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "purchases",
    header: "Purchases",
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
