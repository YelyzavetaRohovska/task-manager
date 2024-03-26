"use client";

import React, { useState } from "react";
import Text from "~/app/components/ui/text";
import Popup from "../../components/ui/popup";
import { EColorBg, ETextSize } from "../../components/types/styleTypes";
import TaskPopup from "./taskPopup";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import ActionConfiramtionPopup from "../../components/ui/actionConfirmationPopup";

interface ITask {
  id: string;
  title: string;
  description: string;
}

const confirmationText = "Are you sure you want to delete a task?";

export default function Task({ id, title, description }: ITask) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const router = useRouter();
  const { isError, mutate: updateTask } = api.tasks.update.useMutation({
    onSuccess: () => {
      toggleTaskPopup(null, false);
      router.refresh();
    },
  });

  const removeTask = api.tasks.deleteById.useMutation({
    onSuccess: () => {
      toggleConfirmationDialog(null, false);
      router.refresh();
    },
  });

  function toggleConfirmationDialog(e: React.MouseEvent<HTMLElement> | null, toggle: boolean) {
    e?.stopPropagation();
    setShowConfirmation(toggle);
  }

  function toggleTaskPopup(e: React.MouseEvent<HTMLElement> | null, toggle: boolean) {
    e?.stopPropagation();
    setIsOpen(toggle);
  }

  return (
    <div
      className="relative my-2 cursor-pointer rounded-lg bg-white p-2 shadow-lg"
      onClick={(e) => toggleTaskPopup(e, true)}
    >
      <div className="flex justify-between">
        <Text size={ETextSize.Big} bg={EColorBg.Default}>
          {title}
        </Text>
        <a
          className="px-2 cursor-pointer"
          onClick={e => toggleConfirmationDialog(e, true)}
        >
          ×
        </a>
      </div>
      <Text size={ETextSize.Small}>{description}</Text>
      {isOpen && (
      <Popup onClose={(e) => toggleTaskPopup(e, false)}>
        <TaskPopup
          taskId={id}
          isError={isError}
          onClose={e => toggleTaskPopup(e, false)}
          onSubmit={(event, data) => {
            event.stopPropagation();
            event.preventDefault();

            updateTask({ id, ...data });
          }}
        />
      </Popup>
    )}
    {showConfirmation && (
      <ActionConfiramtionPopup
        text={confirmationText}
        onCancel={e => toggleConfirmationDialog(e, false)}
        onSubmit={e => {
          e.stopPropagation();
          removeTask.mutate({ id });
        }}
      />
    )}
    </div>
  );
}
