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
import postRequest from "@/utils/post-request";

export default function CreateForm() {
  function handleCreate(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = {
      categoryId: Number(form.get("categoryId")),
      title: form.get("title"),
      description: form.get("description"),
      price: Number(form.get("price")).toFixed(2),
      purchases: 0,
      userId: Number(import.meta.env.VITE_STORE_OWNER_ID),
      image: form.get("imageUrl"),
    };

    postRequest("/products", obj);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create</DialogTitle>
          <DialogDescription>Create a new product</DialogDescription>
        </DialogHeader>
        <form
          id="createform"
          onSubmit={handleCreate}
          className="grid gap-4 py-4"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" name="title" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Image Url
            </Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="categoryId" className="text-right">
              Category
            </Label>
            <Select id="categoryId" name="categoryId" required>
              <SelectTrigger className="col-span-3">
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
              id="description"
              name="description"
              placeholder="Write your description of the product"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price $
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              className="col-span-3"
              step="0.01"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose type="submit" form="createform">
            Create Product
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
