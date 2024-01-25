import { useFormik, FormikProvider, Form } from "formik";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../theme";
import * as Yup from "yup";
import { CiMail } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import IconTextField from "./IconTextField";
import AuthFrame from "./AuthFrame";
import { useNavigate } from "react-router";
import { useUserLogin } from "../../api/auth/loginUser";
import { useEffect } from "react";

type LoginFormT = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();

  const {
    mutate: loginUser,
    isSuccess: isUserLoginSuccess,
    // isLoading: isUserLoginLoading,
    // isError: isUserLoginError,
    // error: userLoginError,
    data: loginData,
  } = useUserLogin();

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
    onSubmit: () => {},
  });
  const handleSubmit = () => {
    loginUser({
      body: {
        email: formik.values.email,
        password: formik.values.password,
      },
    });
  };
  useEffect(() => {
    if (isUserLoginSuccess) {
      localStorage.setItem("accessToken", loginData?.token);
      localStorage.setItem("userId", loginData?.id.toString());
      navigate("/");
    }
  }, [isUserLoginSuccess, loginData]);

  return (
    <Box className="h-screen w-screen flex md:flex-row flex-col">
      <AuthFrame />
      <Box className="w-full flex justify-center md:items-center items-start h-full">
        <FormikProvider value={formik}>
          <Form
            onSubmit={formik.handleSubmit}
            className="h-full  justify-center md:w-1/2 w-10/12 flex flex-col"
          >
            <Typography variant="h5">Welcome!</Typography>
            <Typography variant="caption">
              Sign in to your account to continue
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
              {/* Password Input */}
              <IconTextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                icon={FaKey}
                sx={{ color: theme.palette.primary.main, marginTop: 2 }}
              />
            </Box>
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              color="info"
              sx={{ color: theme.palette.primary.main, marginTop: 2 }}
            >
              Sign in
            </Button>

            <Typography
              textAlign="center"
              variant="body2"
              sx={{ cursor: "pointer", marginTop: 2 }}
              onClick={() => {
                navigate("/passrecovery");
              }}
            >
              Forgot password?
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/signup")}
              sx={{
                marginTop: 2,
              }}
            >
              Sign up
            </Button>
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default Login;
