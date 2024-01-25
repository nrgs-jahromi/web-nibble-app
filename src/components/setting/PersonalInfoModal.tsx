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
import theme from "../../theme";
import { CiMail, CiUser } from "react-icons/ci";
import IconBox from "../baseComponents/IconBox";
import profileDefault from "../../assets/profile.png";
import IconTextField from "../auth/IconTextField";
import {
  MdMailOutline,
  MdPerson,
  MdPersonOutline,
  MdPhone,
} from "react-icons/md";
import { useUserInfo } from "../../api/profile/profileInformation";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PersonalInfoModal: FC<Props> = ({ isOpen, onClose }) => {
  const userId = parseInt(localStorage.getItem("userId") || "0", 10); // '0' در صورتی که مقدار null باشد
  const { data: userInfo, isSuccess: isUserInfoSuccess } = useUserInfo({
    body: { id: userId },
  });

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
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<MdPersonOutline color={theme.palette.primary.main} />}
              color={theme.palette.primary.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              variant="standard"
              label="FULL NAME"
              placeholder="enter your full name"
              defaultValue={userInfo?.full_name}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<MdMailOutline color={theme.palette.secondary.main} />}
              color={theme.palette.secondary.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              variant="standard"
              label="EMAIL ADDRESS"
              placeholder="enter your email"
              defaultValue={userInfo?.email}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<MdPhone color={theme.palette.warning.main} />}
              color={theme.palette.warning.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              variant="standard"
              label="PHONE NUMBER"
              placeholder="enter your phone number"
              defaultValue={userInfo?.phone}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
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
