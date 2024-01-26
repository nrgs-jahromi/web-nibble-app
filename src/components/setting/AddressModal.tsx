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
import { GoHome } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddressModal: FC<Props> = ({ isOpen, onClose }) => {
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
          <Box className="w-full flex gap-4">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ color: "white", borderRadius: "8px" }}
              // onClick={handleOpenDrawer}
            >
              Home (2)
            </Button>
            <Button
              fullWidth
              variant="text"
              color="primary"
              sx={{
                bgcolor: theme.palette.primary.light,
                borderRadius: "8px",
              }}
            >
              Work (3)
            </Button>
          </Box>
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<GoHome color={theme.palette.primary.main} />}
              color={theme.palette.primary.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              variant="standard"
              defaultValue="ejnvjnfnlsfdm lma ml l "
              label="ADDRESS"
              placeholder="ADDRESS"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<GoHome color={theme.palette.secondary.main} />}
              color={theme.palette.secondary.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              defaultValue="775 Cletus Estates Suite 423"
              variant="standard"
              label="ADDRESS"
              placeholder="ADDRESS"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box className="flex w-full gap-4">
            <IconBox
              icon={<GoHome color={theme.palette.warning.main} />}
              color={theme.palette.warning.light}
              size={48}
              borderRadius="12px"
            />
            <TextField
              fullWidth
              variant="standard"
              defaultValue="182 Park Row Street, Suite 8"
              label="ADDRESS"
              placeholder="ADDRESS"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
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
          {/* <Button
            variant="text"
            color="primary"
            endIcon={<IoMdAdd />}
            sx={{ bgcolor: theme.palette.primary.light, width: "25%" }}
          ></Button> */}
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AddressModal;
