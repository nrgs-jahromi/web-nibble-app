import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
  onCancelClick?: () => void;
  onConfirmClick: () => void;
  mode?: "error" | "info" | "success" | "primary";
  isConfirmLoading?: boolean;
};

const ConfirmationModal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  description = "Are you sure?",
  cancelButtonLabel = "Cancel",
  confirmButtonLabel = "Confirm",
  onCancelClick,
  onConfirmClick,
  mode = "primary",
  isConfirmLoading,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancelClick || onClose} autoFocus>
          {cancelButtonLabel}
        </Button>
        <Button disabled={isConfirmLoading} color={mode} variant="contained" onClick={onConfirmClick || onClose}>
          {confirmButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
