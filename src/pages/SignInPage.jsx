import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import postRequest from "@/utils/post-request";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import creativeReels from "../assets/creative-reels-composition.jpg";
import Input from "../components/Input";

function SignInPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    // convert FormData to a javascript object
    var dataObj = {};
    data.forEach((value, key) => {
      dataObj[key] = value;
    });

    const anyFieldEmpty = Object.values(dataObj).some((value) => value === "");
    if (anyFieldEmpty) {
      setError("Don't leave any field empty.");
      return;
    }

    const { result, error } = await postRequest("/login", dataObj);

    const accessToken = result?.accessToken;
    const username = result?.user?.username;
    if (!error && accessToken && username) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", username);
      navigate("/");
    }

    if (error) {
      if (error?.response?.status === 400) {
        setError(error?.response?.data || "");
      }
    }
  }

  return (
    <div className="flex py-10 flex-1 flex-col">
      <div className="flex flex-1">
        <img
          src={creativeReels}
          className="hidden md:block w-3/6 object-cover"
        ></img>
        <form
          className="w-full md:w-3/6 flex flex-col items-center"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col justify-center h-full max-w-[400px] xs:w-[380px] md:px-8">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <label className="text-2xl py-6 font-semibold">Sign In</label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
            ></Input>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            ></Input>
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
