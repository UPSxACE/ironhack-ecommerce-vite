import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import getRequest from "@/utils/get-request";
import putRequest from "@/utils/put-request";
import { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function EditForm({ id, editRow }) {
  const [previousData, setPreviousData] = useState({});
  const [ready, setReady] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    description: "",
    price: "",
  });

  function updateField(e) {
    const fieldName = e.target.name;

    const newState = { ...formData };
    newState[fieldName] = e.target.value;

    setFormData(newState);
  }

  function updateSelectField(fieldName, newValue) {
    const newState = { ...formData };
    newState[fieldName] = newValue;
    setFormData(newState);
  }

  async function handleOpenForm() {
    const { error, result } = await getRequest("/products/" + id);
    if (!error) {
      setReady(true);
      setFormData({
        title: result?.title,
        description: result?.description,
        categoryId: result?.categoryId,
        price: result?.price,
      });
      setPreviousData(result);
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    const obj = {
      categoryId: Number(formData.categoryId),
      title: formData.title,
      description: formData.description,
      price: Number(formData.price).toFixed(2),
      userId: Number(import.meta.env.VITE_STORE_OWNER_ID),
      purchases: previousData.purchases,
      image: previousData.image,
    };

    editRow({
      id: id,
      categoryId: obj.categoryId,
      title: obj.title,
      price: obj.price,
      purchases: previousData.purchases,
    });

    putRequest("/products/" + id, obj);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={handleOpenForm}
          variant="outline"
          className="text-xl p-2"
        >
          <HiOutlinePencilAlt />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form id="editform" onSubmit={handleEdit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              value={formData.title}
              onChange={updateField}
              disabled={!ready}
              id="title"
              name="title"
              type="text"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="categoryId" className="text-right">
              Category
            </Label>
            <Select
              id="categoryId"
              name="categoryId"
              disabled={!ready}
              value={String(formData.categoryId)}
              onValueChange={(newVal) => {
                updateSelectField("categoryId", newVal);
              }}
              required
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Products</SelectLabel>
                  <SelectItem value="1">Cellphones</SelectItem>
                  <SelectItem value="2">Monitors</SelectItem>
                  <SelectItem value="3">Gaming</SelectItem>
                  <SelectItem value="4">Accessories</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              value={formData.description}
              onChange={updateField}
              id="description"
              name="description"
              type="text-area"
              className="col-span-3"
              disabled={!ready}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price $
            </Label>
            <Input
              value={formData.price}
              onChange={updateField}
              id="price"
              name="price"
              type="number"
              className="col-span-3"
              disabled={!ready}
              required
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose type="submit" form="editform">
            Save changes
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
