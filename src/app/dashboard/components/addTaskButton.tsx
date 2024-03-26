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
  const newTask = { title: "New task", statusId };
  const { isPending, mutate: createTask} =  api.tasks.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
 
  return (
    <div className="flex justify-center">
      <Button 
        disabled={isPending}
        disabledText="Creating..."
        onClick={() =>  createTask(newTask)}
      >
        + Add task
      </Button>
    </div>
  );
}