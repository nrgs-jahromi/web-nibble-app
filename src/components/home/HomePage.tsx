import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import { IoIosArrowForward } from "react-icons/io";

const HomePage = () => {
  return (
    <Box className="w-full h-full flex flex-col">
      <Box className="w-full h-1/4 flex flex-col">
        <Box className=" w-full flex flex-row justify-between items-end">
          <Typography variant="h5">Explore categories</Typography>
          <Box
            className="flex flex-row justify-center items-center"
            color={theme.palette.primary.main}
          >
            <Typography variant="caption">See all</Typography>
            <IoIosArrowForward />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HomePage;
