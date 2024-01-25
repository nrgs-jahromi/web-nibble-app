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

const DeliveryAddressModal: FC<Props> = ({ isOpen, onClose }) => {
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
        Delivery address
      </DialogTitle>

      <DialogContent className="flex flex-col  gap-5 justify-start sm:w-96 w-72">
        <TextField
          variant="standard"
          label="STREET NAME"
          placeholder="street"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="standard"
          label="CITY"
          placeholder="city"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="standard"
          label="STATE"
          placeholder="state"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          variant="standard"
          label="ZIP CODE"
          placeholder="zip"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DialogActions sx={{ padding: "0", marginTop: "20px" }}>
          <Button fullWidth variant="contained" onClick={onClose}>
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryAddressModal;
