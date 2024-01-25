import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import theme from "../../../theme";
import profileDefault from "../../../assets/profile.png";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PromoCodeModal: FC<Props> = ({ isOpen, onClose }) => {
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

      <DialogTitle
        className=" sm:w-96 w-72"
        id="alert-dialog-title"
        fontWeight="bold"
      >
        Enter promo code
      </DialogTitle>

      <DialogContent className="flex flex-col  gap-5 justify-start sm:w-96 w-72">
        <TextField variant="outlined" placeholder="promo code" />
        <DialogActions sx={{ padding: "0" }}>
          <Button fullWidth variant="contained" onClick={onClose}>
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default PromoCodeModal;
