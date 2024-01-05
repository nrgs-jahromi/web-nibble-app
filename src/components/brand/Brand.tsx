import { Box, Typography } from "@mui/material";
import image from "../../assets/Icon.png";

const Brand = () => {
  return (
    <Box className="flex flex-row justify-center items-center gap-3">
      <img src={image} alt="brand-icon" className="max-w-10 " />
      <Typography variant="h6" color={"white"}>
        Nibble
      </Typography>
    </Box>
  );
};
export default Brand;
