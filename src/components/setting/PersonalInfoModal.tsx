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
import { CiMail, CiUser } from "react-icons/ci";
import IconBox from "../baseComponents/IconBox";
import profileDefault from "../../assets/profile.png";
import IconTextField from "../auth/IconTextField";
import { MdPerson } from "react-icons/md";
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

      <DialogTitle
        className=" sm:w-96 w-72"
        id="alert-dialog-title"
        fontWeight="bold"
      >
        Personal information
      </DialogTitle>

      <DialogContent className="flex flex-col  gap-10 justify-start sm:w-96 w-72">
        <Box className="flex w-full flex-col gap-8 ">
          <DialogContentText id="alert-dialog-description">
            Profile image
          </DialogContentText>
          <Box className="flex flex-row justify-between w-full gap-4">
            <img src={profileDefault} alt="profileImg" />
            <Button variant="contained" fullWidth>
              Upload
            </Button>
            <Button variant="outlined" fullWidth>
              Delete
            </Button>
          </Box>
        </Box>
        <Box className="flex w-full flex-col gap-8 ">
          <DialogContentText id="alert-dialog-description">
            Profile details
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: "20px 24px" }}>
        <Button fullWidth variant="contained" onClick={onClose}>
          Update profile
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PersonalInfoModal;
