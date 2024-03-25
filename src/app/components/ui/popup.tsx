import React from "react";

interface IPopupProps {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Popup({
  children,
  onClose,
}: IPopupProps) {
  return (
    <div className="popup-dialog fixed inset-0 z-10 overflow-y-auto">
      <div className="flex h-full min-h-screen w-full items-center justify-center px-4 pb-20 pt-4 text-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Popup */}
        <div
          className="inline-block h-4/5 w-4/5 transform overflow-hidden rounded-lg bg-white p-8 text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </div>
    </div>
  );
};