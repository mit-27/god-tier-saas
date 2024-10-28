"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <Button
      className="w-full"
      variant="outline"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </Button>
  );
};

export default SignoutButton;
