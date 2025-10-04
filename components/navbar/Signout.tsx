"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"

const Signout = () => {
  return (
    <SignOutButton>
      <button 
      onClick={()=> toast("Logout Successfully")}>
        Logout
        </button>
    </SignOutButton>
  );
};
export default Signout;
