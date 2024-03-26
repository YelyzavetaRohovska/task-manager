"use client"

import React, { useState } from 'react';

import { debounce } from '~/lib/utils';
import { api } from '~/trpc/react';
import type { IColumn } from './column';

import Input from '../../components/ui/input';
import ActionConfiramtionPopup from '../../components/ui/actionConfirmationPopup';
import { useRouter } from 'next/navigation';

const confirmationText = "All tasks in this column will be deleted. Are you sure you want to delete the column?";
const debouncedRenameColumn = debounce((cb: () => void) => cb(), 500);

export default function ColumnHeader({
    id,
    title,
}: IColumn) {
  const router = useRouter();

  const [value, setValue] = useState(title);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const renameColumn = api.columns.updateTitle.useMutation({
    onSuccess: () => setError(""),
    onError: () => setError("Error ocures, try again"),
  });

  const removeColumn = api.columns.deleteById.useMutation({
    onSuccess: () => {
      toggleConfirmationDialog(false);
      router.refresh();
    }
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
  
    setValue(title);
    debouncedRenameColumn(() => renameColumn.mutate({id, title: title.trim()}));
  };

  function toggleConfirmationDialog(toggle: boolean) {
    setShowConfirmation(toggle);
  }

  return (
    <div className="flex items-center justify-between pb-2 pl-4">
      <Input
        value={value}
        error={error}
        minLength={0}
        maxLength={40}
        onChange={handleInputChange}
      />
      <a className="px-2 cursor-pointer" onClick={() => toggleConfirmationDialog(true)}>
        ×
      </a>
      {showConfirmation && (
        <ActionConfiramtionPopup
          text={confirmationText}
          onCancel={() => toggleConfirmationDialog(false)}
          onSubmit={() => removeColumn.mutate({ id })}
        />
      )}
    </div>
  )
};
