import React from "react";
import creativeReels from "../assets/creative-reels-composition.jpg";
import Input from "../components/Input";

function SignInPage() {
  return (
    <div className="flex flex-row space-x-80 p-10">
      <img src={creativeReels} className="w-3/6"></img>
      <form className="w-3/6">
        <div className="flex flex-col my-40">
          <label className="text-4xl py-6 font-semibold">Sign In</label>
          <Input type="email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <div className="flex items-center justify-around p-8">
            <button className="btn bg-black text-white py-4 px-12 text-3xl">Log In</button>
            <p className="p-3">Forgot Password?</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
