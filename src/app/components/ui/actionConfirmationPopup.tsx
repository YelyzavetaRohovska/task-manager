"use client"

import React from 'react';
import { EColorBg, ETextSize } from '../types/styleTypes';
import Button from './button';
import Text from './text';
import Popup from './popup';

interface IActionConfirmationProps {
  text: string;
  onSubmit: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function ActionConfiramtionPopup({
  text,
  onSubmit,
  onCancel,
}: IActionConfirmationProps) {
  return (
    <Popup onClose={onCancel}>
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          <Text size={ETextSize.Large}>Action confirmation modal</Text>
          <div className="divide-y-2"></div>
          <Text>{text}</Text>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onCancel} btnStyle={EColorBg.Default}>
            Cancel
          </Button>
          <Button onClick={onSubmit} btnStyle={EColorBg.Success}>
            Confirm
          </Button>
        </div>
      </div>
    </Popup>
  )
};
