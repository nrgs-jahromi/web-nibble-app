import { Box, Button, IconButton, Typography } from "@mui/material";
import theme from "../../theme";
import { IoClose } from "react-icons/io5";
import IconBox from "../baseComponents/IconBox";
import { BsFire } from "react-icons/bs";
import { TbMeat } from "react-icons/tb";
import { MdArrowForward } from "react-icons/md";

const Advertize = () => {
  return (
    <Box className="w-5/6 h-fit flex flex-col justify-center items-center">
      <Box
        className="w-full h-64 bg-white flex flex-col justify-center items-center rounded-2xl z-50 relative"
        sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <IconButton
          edge="end"
          color="inherit"
          // onClick={onClose}
          sx={{
            position: "absolute",
            top: theme.spacing(1),
            right: theme.spacing(2),
          }}
        >
          <IoClose />
        </IconButton>

        <Box
          className="w-full h-full justify-between p-5 flex items-center flex-col"
          sx={{ whiteSpace: "normal" }}
        >
          <IconBox
            size={48}
            icon={<BsFire color={theme.palette.secondary.main} />}
            color={theme.palette.secondary.light}
            borderRadius="10px"
          />
          <Typography variant="body1" fontWeight={"bold"} align="center">
            Free delivery on all orders over{" "}
            <span style={{ color: theme.palette.secondary.main }}>
              <u>$25</u>
            </span>
          </Typography>
          <Typography variant="body2" align="center">
            It is a limited time offer that will expire soon.
          </Typography>
          <Button fullWidth endIcon={<MdArrowForward />} variant="contained">
            Order now
          </Button>
        </Box>
      </Box>
      <Box
        className="w-5/6 h-3 bg-neutral-50 flex justify-center rounded-b-2xl z-30"
        sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
      ></Box>
      <Box
        className="w-4/6 h-3 bg-neutral-50 flex justify-center rounded-b-2xl z-20"
        sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
      ></Box>
    </Box>
  );
};
export default Advertize;
