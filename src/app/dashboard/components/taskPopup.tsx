"use client"

import React, { useEffect, useState } from 'react';
import { api } from '~/trpc/react';

import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import Dropdown from '../../components/ui/dropdown';
import TextArea from '../../components/ui/textArea';
import Text from '~/app/components/ui/text';

import { EColorBg, ETextColor } from '../../components/types/styleTypes';

interface ITaskPopupProps {
  taskId: string;
  isError?: boolean;
  onSubmit: (
    event: React.ChangeEvent<HTMLElement> | React.FormEvent<HTMLFormElement>,
    data: IFormData,
  ) => void;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

interface IFormData {
  title: string;
  description: string;
  statusId: string;
}

export default function TaskPopup({
  taskId,
  isError,
  onSubmit,
  onClose,
}: ITaskPopupProps): JSX.Element {
  const { data: task, isLoading } = api.tasks.getById.useQuery({ id: taskId });
  const { data: columns = [] } = api.columns.getAll.useQuery();

  const [formData, setFormData] = useState<IFormData>({
    title: "",
    description: "",
    statusId: "",
  });

  useEffect(() => {
    setFormData({
      title: task?.title ?? "",
      description: task?.description ?? "",
      statusId: task?.statusId ?? "",
    });
  }, [isLoading, task?.title, task?.description, task?.statusId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form
          onSubmit={(e) => onSubmit(e, formData)}
          className="flex h-full flex-col gap-4"
        >
          {isError && <Text color={ETextColor.Danger}>Your data contain errors, please update.</Text>}
          <Input
            value={formData.title}
            id="title"
            name="title"
            onChange={handleChange}
            maxLength={40}
            minLength={1}
          />
          <Dropdown
            label={{
              htmlFor: "status",
              text: "Status",
            }}
            name="statusId"
            onChange={handleChange}
            value={formData.statusId}
            options={columns.map((col) => ({
              value: col.id,
              text: col.title,
            }))}
          />
          <TextArea
            value={formData.description}
            name="description"
            onChange={handleChange}
          />
          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <Button onClick={onClose} btnStyle={EColorBg.Default}>
                Cancel
              </Button>
              <Button type="submit" btnStyle={EColorBg.Success}>
                Save
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
