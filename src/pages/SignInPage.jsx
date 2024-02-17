import React from "react";
import creativeReels from "../assets/creative-reels-composition.jpg";
import Input from "../components/Input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="flex py-10 flex-1 flex-col">
      <div className="flex flex-1">
        <img src={creativeReels} className="w-3/6 object-cover"></img>
        <form className="w-3/6 flex flex-col items-center">
          <div className="flex flex-col justify-center h-full max-w-[500px] min-w-[300px]">
            <label className="text-2xl py-6 font-semibold">Sign In</label>
            <Input type="email" placeholder="Email"></Input>
            <Input type="password" placeholder="Password"></Input>
            <div className="flex items-center justify-between py-8">
              <Button className="bg-mainBlack h-auto py-3 px-10 text-lg">
                Login
              </Button>
              <Link to={"/"} className="p-3">
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
