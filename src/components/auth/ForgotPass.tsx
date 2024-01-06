import { useFormik, FormikProvider, Form } from "formik";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../theme";
import * as Yup from "yup";
import { CiMail } from "react-icons/ci";
import IconTextField from "./IconTextField";
import AuthFrame from "./AuthFrame";
import { useNavigate } from "react-router";
import { useState } from "react";
import ResetEmailModal from "./ResetEmailModal";

type LoginFormT = {
  email: string;
  password: string;
};
const ForgotPass = () => {
  //   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const formik = useFormik<LoginFormT>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email_address: Yup.string()
        .email("Please enter a valid email.")
        .required("Please enter you account's email."),
      password: Yup.string().required("Please enter your password."),
    }),
    onSubmit: (values) => {
      console.log("values=", values);
      // loginUser({
      //   body: {
      //     email_address: values.email_address,
      //     password: values.password,
      //   },
      // });
    },
  });

  return (
    <Box className="h-screen w-screen flex md:flex-row flex-col">
      <AuthFrame />
      <Box className="w-full flex justify-center md:items-center items-start h-full">
        <FormikProvider value={formik}>
          <Form className="h-full  justify-center md:w-1/2 w-10/12 flex flex-col">
            <Typography variant="h5">Forgot password?</Typography>
            <Typography variant="caption">
              Please enter your email address to continue
            </Typography>
            <Box className="flex flex-col gap-8 my-10 w-full">
              <IconTextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                icon={CiMail}
                sx={{ color: theme.palette.primary.main }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              onClick={() => {
                setIsOpen(true);
              }}
              sx={{
                marginTop: 2,
                color: "white",
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Continue{" "}
            </Button>
          </Form>
        </FormikProvider>
      </Box>
      <ResetEmailModal isOpen={isOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default ForgotPass;
