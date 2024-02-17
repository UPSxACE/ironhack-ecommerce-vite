import React from "react";
import creativeReels from "../assets/creative-reels-composition.jpg";
import Input from "../components/Input";

function SignUpPage() {
  return (
    <div className="flex flex-row p-10 min-h-[calc(100vh-50px)] ">
      <img src={creativeReels} className="w-3/6 object-cover"></img>
      <form className="w-3/6 flex flex-col items-center">
        <div className="flex flex-col justify-center h-full max-w-[500px] min-w-[450px]">
          <label className="text-4xl py-6 font-semibold">Sign Up</label>
          <Input type="text" placeholder="Name"></Input>
          <Input type="email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Input type="password" placeholder="Repeat Password"></Input>
          <button className="btn bg-black text-white py-4 px-10 text-3xl w-3/5 my-6">Register</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
