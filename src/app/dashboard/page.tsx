import Column from "~/app/dashboard/components/column";
import { api } from "~/trpc/server";
import AddColumn from "~/app/dashboard/components/addColumnButton";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const columns = await api.columns.getAll();
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="flex-1 bg-slate-600">
      <div className="w-full h-full flex flex-row overflow-scroll">
        {
          columns.map(column => <Column key={column.id} id={column.id} title={column.title} />)
        }
        <AddColumn />
      </div>
    </div>
  );
}