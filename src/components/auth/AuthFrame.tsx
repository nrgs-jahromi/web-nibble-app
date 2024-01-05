import { Box } from "@mui/material";
import image from "../../assets/Image.png";
import Brand from "../brand/Brand";

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
