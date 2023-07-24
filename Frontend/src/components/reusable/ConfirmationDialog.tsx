import React from "react";
import "./ConfirmationDialog.css";

interface ConfirmationDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click occurred on the overlay (outside the dialog content)
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  const handleConfirmClick = () => {
    onConfirm();
  };

  return (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div className="dialog-content">
        <p>{message}</p>
        <div className="button-container">
          <button onClick={onCancel} className="confirm">
            Stay
          </button>
          <button onClick={handleConfirmClick} className="cancel">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
