import { Box, Typography } from "@mui/material";
import image from "../../assets/Image.png";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Brand from "../brand/Brand";
import theme from "../../theme";

const AuthFrame = () => {
  return (
    <Box
      flexBasis={{ xs: "100%", sm: "30%", md: "30%" }}
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        borderRadius: "0 24px 24px 0",
        "@media screen and (max-width: 768px)": {
          flexBasis: "30%",
          borderRadius: "0 0 24px 24px",
        },
      }}
    >
      <Brand />
    </Box>
  );
};
export default AuthFrame;
