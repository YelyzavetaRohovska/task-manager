import Text from "./ui/text";
import { ETextSize } from "./types/styleTypes";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import UserAvatar from "./userAvatar";

export default async function Header() {
  const session = await getServerSession(authOptions);


  return (
    <header className="sticky flex justify-center border-b">
      <div className="flex items-center justify-between w-full h-full px-4 py-2 mx-auto sm:px-6 text-lg font-semibold">
        <Text size={ETextSize.Large}>Task Manager</Text>
        { session?.user && session.user.name && <UserAvatar 
          id={session.user.id} 
          name={session.user.name} 
          image={session.user.image ?? undefined} />}
      </div>
    </header>
  )
}