"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignupCard } from "./signup-card";
import { SigninCard } from "./signin-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SigninCard setState={setState} />
        ) : (
          <SignupCard setState={setState} />
        )}
      </div>
    </div>
  );
};
