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
import { FC, useEffect, useState } from "react";
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
import { GoHome } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useUserAddressList } from "../../api/profile/getAllUserAddress";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddressModal: FC<Props> = ({ isOpen, onClose }) => {
  const { data: userAllAddress } = useUserAddressList();
  const [selectedCategory, setSelectedCategory] = useState("Home");
  // const [openAddAddressModal, setOpenAddAddressModal] = useState(false);
  const selectCategoryHandler = (name: string) => {
    setSelectedCategory(name);
  };

  const selectedCategoryAddresses = userAllAddress?.filter(
    (address) => address.category === selectedCategory.charAt(0)
  );
  const workAddresses = userAllAddress?.filter(
    (address) => address.category === "W"
  );
  const homeAddresses = userAllAddress?.filter(
    (address) => address.category === "H"
  );

  useEffect(() => {
    selectedCategoryAddresses;
  }, [selectedCategory]);

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
        Saved addresses
      </DialogTitle>

      <DialogContent className="flex flex-col  gap-10 justify-start sm:w-96 w-72">
        <Box className="flex w-full flex-col gap-8 ">
          <Box className="w-full flex gap-4">
            <Button
              fullWidth
              variant={selectedCategory === "Home" ? "contained" : "text"}
              color="primary"
              sx={{
                borderRadius: "8px",
                bgcolor:
                  selectedCategory === "Work"
                    ? theme.palette.primary.light
                    : "",
              }}
              onClick={() => selectCategoryHandler("Home")}
            >
              Home ({homeAddresses?.length})
            </Button>
            <Button
              fullWidth
              variant={selectedCategory === "Work" ? "contained" : "text"}
              color="primary"
              sx={{
                bgcolor:
                  selectedCategory === "Home"
                    ? theme.palette.primary.light
                    : "",
                borderRadius: "8px",
              }}
              onClick={() => selectCategoryHandler("Work")}
            >
              Work ({workAddresses?.length})
            </Button>
          </Box>
          {selectedCategoryAddresses?.map((address, index) => (
            <Box className="flex w-full gap-4">
              <IconBox
                icon={
                  <GoHome
                    color={
                      index % 3 === 0
                        ? theme.palette.primary.main
                        : index % 3 === 1
                        ? theme.palette.secondary.main
                        : theme.palette.warning.main
                    }
                  />
                }
                color={
                  index % 3 === 0
                    ? theme.palette.primary.light
                    : index % 3 === 1
                    ? theme.palette.secondary.light
                    : theme.palette.warning.light
                }
                size={48}
                borderRadius="12px"
              />
              <TextField
                fullWidth
                variant="standard"
                defaultValue={address.street + address.city + address.state}
                label="ADDRESS"
                placeholder="ADDRESS"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: "20px 24px" }}>
        <Box className="w-full flex gap-4">
          <IconButton
            color="primary"
            sx={{
              bgcolor: theme.palette.primary.light,
              width: "48px",
              height: "48px",
              borderRadius: "12px",
            }}
          >
            <IoMdAdd />
          </IconButton>
          <Button
            fullWidth
            variant="contained"
            onClick={onClose}
            sx={{ borderRadius: "12px" }}
          >
            Save changes
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AddressModal;
