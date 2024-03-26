"use client";

import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

import Button from "~/app/components/ui/button";

export default function AddColumn() {
  const router = useRouter();
  const { isPending, mutate: createColumn} =  api.columns.create.useMutation({
    onSuccess: () => {
      router.refresh();
    }
  });
 
  return (
    <Button 
      disabled={isPending}
      disabledText="Creating..."
      onClick={() => createColumn({title: "New column"})}
    >
      + Add column
    </Button>
  );
}