"use client";

import Image from "next/image";
import googleLogo from "../../../public/google.png";
import discordLogo from "../../../public/discord.png";
import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  async function handleClick() {
    await signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors    duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}

export function DiscordSignInButton() {
  async function handleClick() {
    await signIn("discord");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={discordLogo} alt="Discord Logo" width={20} height={20} />
      <span className="ml-4">Continue with Discord</span>
    </button>
  );
}

export function CredentialsSignInButton() {
  async function handleClick() {
    await signIn();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      {/* <Image src={githubLogo} alt="Github Logo" width={20} height={20} /> */}
      <span className="ml-4">Continue with Email</span>
    </button>
  );
}