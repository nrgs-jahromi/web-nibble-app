import { useFormik, FormikProvider, Form } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import theme from "../../theme";
import * as Yup from "yup";
import { CiMail, CiUser } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import IconTextField from "./IconTextField";
import AuthFrame from "./AuthFrame";
import { useNavigate } from "react-router";
import { useUserRegistration } from "../../api/auth/register";

type SignUpFormT = {
  email: string;
  password: string;
  full_name: string;
};
const SignUp = () => {
  const navigate = useNavigate();

  const { mutate: register } = useUserRegistration();
  const formik = useFormik<SignUpFormT>({
    initialValues: {
      email: "",
      password: "",
      full_name: "",
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
    register({
      body: {
        email: formik.values.email,
        full_name: formik.values.full_name,
        password: formik.values.password,
      },
    });
  };
  return (
    <Box className="h-screen w-screen flex md:flex-row flex-col">
      <AuthFrame />
      <Box className="w-full flex justify-center md:items-center items-start h-full">
        <FormikProvider value={formik}>
          <Form className="h-full  justify-center md:w-1/2 w-10/12 flex flex-col">
            <Typography variant="h5">Create an annount</Typography>
            <Typography variant="caption">
              Plese create an account to continue using our service{" "}
            </Typography>
            <Box className="flex flex-col gap-8 my-10 w-full">
              <IconTextField
                fullWidth
                id="full_name"
                name="full_name"
                label="FULL NAME"
                type="text"
                icon={CiUser}
                sx={{ color: theme.palette.primary.main }}
              />
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
                sx={{ color: theme.palette.primary.main }}
              />
            </Box>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
              }}
            >
              Create an account
            </Button>
            <Typography variant="caption" textAlign="center" marginTop="16px">
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                style={{
                  cursor: "pointer",
                  color: theme.palette.secondary.main,
                }}
              >
                Sign In
              </span>
            </Typography>
          </Form>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default SignUp;
