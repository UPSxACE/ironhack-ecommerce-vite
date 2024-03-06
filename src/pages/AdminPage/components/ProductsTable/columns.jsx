import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import deleteRequest from "@/utils/delete-request";
import { ArrowUpDown } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";

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
    cell: ({ row: { getValue, index }, table }) => {
      const productId = getValue("id");

      const editRow = (newValue) => {
        table.options.meta?.updateData(index, newValue);
      };

      const deleteRow = () => table.options.meta?.deleteData(index);

      const deleteProduct = async () => {
        await deleteRequest("/products/" + productId);
        deleteRow();
      };

      return (
        <div className="font-medium flex gap-2">
          <Link to={"/product/" + productId} target="_blank">
            <Button variant="outline" className="text-xl p-2">
              <LuEye />
            </Button>
          </Link>

          <EditForm id={productId} editRow={editRow} />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-lg p-2">
                <FaRegTrashAlt />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  product and remove the data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deleteProduct}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
