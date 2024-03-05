import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import postRequest from "@/utils/post-request";
import putRequest from "@/utils/put-request";

function FormAdmin() {
  const [productEditId, setProductEditId] = useState(null);

  /*const navigate = useNavigate()

 function handleEdit() {
  e.preventDefault()

 

  axios
    .put('http://localhost:3000/products/:id')


 }
*/
  function handleEdit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = {
      categoryId: Number(form.get("categoryId")),
      title: form.get("title"),
      description: form.get("description"),
      price: Number(form.get("price")).toFixed(2),
      purchases: 0, //fix later
      userId: Number(import.meta.env.VITE_STORE_OWNER_ID)
    };

    putRequest("/products", obj)
  }

  function handleCreate(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = {
      categoryId: Number(form.get("categoryId")),
      title: form.get("title"),
      description: form.get("description"),
      price: Number(form.get("price")).toFixed(2),
      purchases: 0,
      userId: Number(import.meta.env.VITE_STORE_OWNER_ID)
    };
    console.log(obj);

    postRequest("/products", obj)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={() => {
              setProductEditId(1);
            }}
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <form id="editform" onSubmit={handleEdit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" name="title" type="text" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryId" className="text-right">
                Category
              </Label>
              <Select id="categoryId" name="categoryId">
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
              <Textarea id="description" name="description" type="text-area" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price $
              </Label>
              <Input id="price" name="price" type="number" className="col-span-3" />
            </div>
          </form>
          <DialogFooter>
            <DialogClose type="submit" form="editform" >
              Save changes
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create</DialogTitle>
            <DialogDescription>Create a new product</DialogDescription>
          </DialogHeader>
          <form id="createform" onSubmit={handleCreate} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" name="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryId" className="text-right">
                Category
              </Label>
              <Select id="categoryId" name="categoryId">
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
              <Textarea id="description" name="description" placeholder="Write your description of the product" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price $
              </Label>
              <Input id="price" name="price" type="number" className="col-span-3" />
            </div>
          </form>
          <DialogFooter>
            <DialogClose>
              <Button type="submit" form="createform">
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormAdmin;

/* <DropdownMenu>
    <DropdownMenuTrigger>Create</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Open</DropdownMenuItem>
      <DropdownMenuItem>Download</DropdownMenuItem>
      <DialogTrigger asChild>
        <ContextMenuItem>
          <span>Delete</span>
        </ContextMenuItem>
      </DialogTrigger>
    </DropdownMenuContent>
  </DropdownMenu>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently
        delete this file from our servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent> */
