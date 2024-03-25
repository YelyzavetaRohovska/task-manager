import {
  CredentialsSignInButton,
  DiscordSignInButton,
  GoogleSignInButton,
} from "~/app/components/authButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth"
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-slate-400 py-2">
      <div className="flex flex-col items-center bg-slate-500 rounded mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        <GoogleSignInButton />
        <DiscordSignInButton />
        <span className="text-2xl font-semibold text-white text-center mt-8">
          Or
        </span>
        <CredentialsSignInButton />
      </div>
    </div>
  );
}