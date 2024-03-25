"use client";

import React from "react";
import Button from "~/app/components/ui/button";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function AddColumn() {
  const router = useRouter();
  const create =  api.columns.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  function createColumn() {
    create.mutate({title: "New column"});
  }
 
  return (
    <div>
      <Button 
        onClick={createColumn}>+ Add column</Button>
    </div>
  );
}