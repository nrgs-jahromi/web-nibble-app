import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import theme from "../../theme";
import { CiMail } from "react-icons/ci";
import IconBox from "../baseComponents/IconBox";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PersonalInfoModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      maxWidth="xs"
      sx={{ padding: "20px" }}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: theme.spacing(1),
          right: theme.spacing(2),
        }}
      >
        <IoClose />
      </IconButton>

      <DialogTitle className=" sm:w-96 w-72" id="alert-dialog-title">
        Personal information
      </DialogTitle>

      <DialogContent className="flex justify-center sm:w-96 w-72">
        <DialogContentText id="alert-dialog-description">
          We have just sent an email with a password reset link to{" "}
          <span>
            <strong>markclarke@gmail.com</strong>
          </span>
          .
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px 24px" }}>
        <Button fullWidth variant="contained" autoFocus onClick={onClose}>
          Update profile
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PersonalInfoModal;
