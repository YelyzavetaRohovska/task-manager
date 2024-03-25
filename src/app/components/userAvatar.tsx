import Text from "./ui/text";

interface IUserAvatar {
  id: string;
  name: string;
  image?: string;
}

export default async function UserAvatar({
  id,
  name,
  image,
}: IUserAvatar) {
  return (
    <div id={id} className="flex flex-row gap-2 align-middle justify-center">
        <div className="flex flex-row gap-2 align-middle justify-center p-2 border border-slate-300 bg-slate-100 rounded-md">
          {image && (
            <span
              className="w-[40px] h-[40px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          )}
          <Text>{name}</Text>
      </div>
    <a
      className="flex items-center px-4 py-2  bg-slate-400 text-white rounded-md hover:bg-slate-500 focus:bg-slate-600 focus:outline-none"
      href={`/api/auth/signout`}
    >
      Sign out
    </a>
  </div>
  )
}