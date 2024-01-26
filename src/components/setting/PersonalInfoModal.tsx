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
import { ChangeEvent, FC, useState } from "react";
import { IoClose } from "react-icons/io5";
import theme from "../../theme";
import {
  MdMailOutline,
  MdPerson,
  MdPersonOutline,
  MdPhone,
} from "react-icons/md";
import { useUserInfo } from "../../api/profile/profileInformation";
import profileDefault from "../../assets/profile.png";
import IconBox from "../baseComponents/IconBox";
import { useProfileUpdate } from "../../api/profile/updateProfile";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PersonalInfoModal: FC<Props> = ({ isOpen, onClose }) => {
  const userId = parseInt(localStorage.getItem("userId") || "0", 10); // '0' در صورتی که مقدار null باشد
  const { data: userInfo, isSuccess: isUserInfoSuccess } = useUserInfo({
    body: { id: userId },
  });
  const [fullName, setFullName] = useState<String>(userInfo?.full_name);
  const [email, setEmail] = useState<string>(userInfo?.email);
  const [phone, setPhone] = useState<string>(userInfo?.phone);
  const [picture, setPicture] = useState<string>(userInfo?.picture);

  // const [profileImage, setProfileImage] = useState(profileDefault);
  const { mutate: updateProfileMutation } = useProfileUpdate();

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);

      // Generate a data URL for the preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setPicture(reader.result as string); // Move this line here
      };
      reader.readAsDataURL(file);
    } else {
      // Reset selected file and preview if not an image
      setSelectedFile(undefined);
      setPreviewUrl(undefined);
      alert("Please select a valid image file.");
    }
  };

  const handleUpload = () => {
    // Handle the upload logic here using the selectedFile
    if (selectedFile) {
      console.log("Uploading:", selectedFile);
      // You can use FormData to send the file to the server, make an API call, etc.
    } else {
      console.log("No file selected");
    }
  };

  const uploadButton = () => {
    return (
      <input
        type="file"
        hidden
        onChange={handleFileChange}
        accept="image/*"
        multiple={false}
      />
    );
  };
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

      <DialogContent className="flex flex-col gap-10 justify-start sm:w-96 w-72">
        <Box className="flex w-full flex-col gap-8 ">
          <DialogContentText id="alert-dialog-description">
            Profile image
          </DialogContentText>
          <Box className="flex flex-row justify-between w-full gap-4">
            <img
              src={selectedFile ? previewUrl : profileDefault}
              alt="profileImg"
              className="rounded-full h-12 w-12 "
            />

            <Button
              variant="contained"
              fullWidth
              component="label"
              onClick={handleUpload}
            >
              {uploadButton()}
              Upload
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setPreviewUrl(undefined);
                setSelectedFile(undefined);
              }}
            >
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
              value={fullName} // استفاده از مقدار fullName به جای defaultValue={userInfo?.full_name}
              onChange={(event) => setFullName(event.target.value)}
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
              value={email} // استفاده از مقدار fullName به جای defaultValue={userInfo?.full_name}
              onChange={(event) => setEmail(event.target.value)}
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
              value={phone} // استفاده از مقدار fullName به جای defaultValue={userInfo?.full_name}
              onChange={(event) => setPhone(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: "20px 24px" }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            updateProfileMutation({
              // Pass updated profile data to the mutation function
              body: {
                full_name: fullName, // Update with actual value
                email: email, // Update with actual value
                phone: phone, // Update with actual value
                picture: picture, // Update with actual value
              },
            });
            onClose(); // Close the modal after updating profile
          }}
        >
          Update profile
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PersonalInfoModal;
