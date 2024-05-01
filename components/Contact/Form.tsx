"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-md rounded-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-sm md:text-xl text-neutral-800 dark:text-neutral-200">
        Connect with Team
      </h2>
      <p className="text-neutral-600 text-[10px] md:text-[14px] md:text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-[10px] md:text-[14px]">First name</Label>
            <Input id="firstname" placeholder="" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-[10px] md:text-[14px]">Last name</Label>
            <Input id="lastname" placeholder="" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-[10px] md:text-[14px]">Email Address</Label>
          <Input id="email" placeholder="xxxxxx@srmist.edu.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8 " >
          <Label htmlFor="twitterpassword" className="text-[10px] md:text-[14px]">Your twitter password</Label>
          {/* <Input
            id="query"
            placeholder="Your query"
            type="text"/> */}
            <textarea className="border-yellow-400 bg-slate-100 outline-none rounded-sm md:rounded-md p-2 font-typer text-[10px] md:text-[14px]" id="w3review" name="query">
              Write your Query here
            </textarea>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-[#f39e2f] dark:from-orange-500 dark:to-orange-400 to-orange-700 block w-full text-white text-[10px] md:text-[14px] rounded-md h-8 md:h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
