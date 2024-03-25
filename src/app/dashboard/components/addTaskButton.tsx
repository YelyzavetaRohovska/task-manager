"use client";

import React from "react";
import Button from "~/app/components/ui/button";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface IAddTask {
  statusId: string;
}

export default function AddTask({
  statusId,
}: IAddTask) {
  const router = useRouter();
  const create =  api.tasks.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  function createTask() {
    create.mutate({
      title: "New task",
      statusId,
    });
  }
 
  return (
    <div className="flex justify-center">
      <Button 
        onClick={createTask}>+ Add task</Button>
    </div>
  );
}