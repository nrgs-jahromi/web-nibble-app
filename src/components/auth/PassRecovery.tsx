import { useFormik, FormikProvider, Form } from "formik";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../theme";
import * as Yup from "yup";
import { CiMail } from "react-icons/ci";
import IconTextField from "./IconTextField";
import AuthFrame from "./AuthFrame";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import ResetEmailModal from "./ResetEmailModal";
import { usePasswordChanging } from "../../api/auth/setPassword";

type LoginFormT = {
  password: string;
  confirm: string;
};
const PassRecovery = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const {
    mutate: changePassword,
    isSuccess: isChangingPasswordSuccess,
    isError: isChangingPasswordFail,
  } = usePasswordChanging();

  const formik = useFormik<LoginFormT>({
    initialValues: {
      confirm: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Please enter a new password."),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match.")
        .required("Please confirm your new password."),
    }),
    onSubmit: (values) => {
      console.log("values=", values);
    },
  });

  const handleSet = () => {
    if (formik.isValid) {
      // Only make the API call if the form is valid
      changePassword({
        body: {
          password: formik.values.password,
        },
        params: {
          token: token,
        },
      });
    }
  };

  useEffect(() => {
    if (isChangingPasswordSuccess) {
      navigate("/login/");
    }
  }, [isChangingPasswordSuccess]);

  return (
    <Box className="h-screen w-screen flex md:flex-row flex-col">
      <AuthFrame />
      <Box className="w-full flex justify-center md:items-center items-start h-full">
        <FormikProvider value={formik}>
          <Form className="h-full  justify-center md:w-1/2 w-10/12 flex flex-col">
            <Typography variant="h5">Password Recovery</Typography>
            <Typography variant="caption">
              Please enter your new password
            </Typography>
            <Box className="flex flex-col gap-8 my-10 w-full">
              <IconTextField
                fullWidth
                id="password"
                name="password"
                label="password"
                type="password"
                icon={CiMail}
                sx={{ color: theme.palette.primary.main }}
              />
              <IconTextField
                fullWidth
                id="confirm"
                name="confirm"
                label="confirm"
                type="password"
                icon={CiMail}
                sx={{ color: theme.palette.primary.main }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              onClick={handleSet}
              disabled={!formik.isValid}
              sx={{
                marginTop: 2,
                color: "white",
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Set new Password
            </Button>
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default PassRecovery;
