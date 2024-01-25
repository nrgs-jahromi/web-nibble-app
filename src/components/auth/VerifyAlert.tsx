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
import { useNavigate } from "react-router";
import { useUserRegistration } from "../../api/auth/register";
import {
  SnackbarProvider,
  VariantType,
  enqueueSnackbar,
  useSnackbar,
} from "notistack";

type Props = {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  mode?: "error" | "info" | "success" | "primary";
};

const VerifyEmailModal: FC<Props> = ({
  isOpen,
  onClose,
  mode = "primary",
  email,
}) => {
  const navigate = useNavigate();
  const { mutate: register, isSuccess: isRegisterSuccess } =
    useUserRegistration();
  const onResendClick = (variant: VariantType) => () => {
    register({
      body: {
        email: email,
      },
    });

    if (isRegisterSuccess) {
      enqueueSnackbar("This is a success message!", { variant });
    }
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
        className="flex flex-col justify-center items-center sm:w-96 w-72"
        id="alert-dialog-title"
      >
        <Box className="flex flex-row">
          <IconBox
            color={theme.palette.primary.main}
            borderRadius="16px"
            size={64}
            icon={<CiMail />}
          />
        </Box>
        Reset email sent
      </DialogTitle>

      <DialogContent className="flex justify-center sm:w-96 w-72">
        <DialogContentText id="alert-dialog-description">
          An email for verification has been sent to{" "}
          <span>
            <strong>{email}</strong>
          </span>
          . Please check your email and follow the verification instructions. .
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ padding: "20px 24px" }}
        className="flex !justify-center w-full"
      >
        <Button
          fullWidth
          color={mode}
          variant="contained"
          autoFocus
          onClick={() => navigate("/login")}
        >
          Got it
        </Button>
        <Button fullWidth color="inherit" onClick={onResendClick("success")}>
          Send again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VerifyEmailModal;
