"use client"

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-400 py-2">
      Opps.... Something went wrong :()
      <a
        className="flex items-center px-4 py-2  bg-slate-400 text-white rounded-md hover:bg-slate-500 focus:bg-slate-600 focus:outline-none"
        href={`/api/auth/signout`}
      >
        Sign out
    </a>
    </div>
  );
}