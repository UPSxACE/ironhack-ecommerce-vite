import React from "react";
import creativeReels from '../assets/creative-reels-composition.jpg'

function SignInPage() {
  return (
    <div>
      <img src={creativeReels}></img>
      <form>
        <label>Sign In</label>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
      </form>
    </div>
  );
}

export default SignInPage;
