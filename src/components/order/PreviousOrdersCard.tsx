import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme";
import { GoCalendar, GoClock } from "react-icons/go";
import PreviousOrderItem from "./PreviousOrderItem";

const PreviousOrdersCard = () => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      className=" min-h-60 max-h-60 bg-neutral-100"
      width={islgScreen ? "30%" : isMdScreen ? "45%" : "100%"}
      sx={{
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <Box className="flex  flex-row w-full justify-between">
        <Typography variant="body2" fontWeight={"bold"} color={"#182135"}>
          Pizza Hut{" "}
        </Typography>
        {/* <span className="text-xs  min-w-fit h-fit bg-[#FF00001A] text-[#FF0000] padding px-2 py-1 rounded-md">
          Canceled
        </span> */}
        <span className="text-xs  min-w-fit h-fit bg-[#419D3E1A] text-[#419D3E] padding px-2 py-1 rounded-md">
          Completed
        </span>
      </Box>
      <Box className="flex gap-4 justify-starts ">
        <Box className="flex gap-1 items-center">
          <GoCalendar color={theme.palette.common.black} />
          <Typography variant="body2">September 16, 2020</Typography>
        </Box>
        <Box className="flex gap-1 items-center">
          <GoClock color={theme.palette.common.black} />
          <Typography variant="body2">11:54 PM</Typography>
        </Box>
      </Box>
      <PreviousOrderItem count={3} name={"Grand BigMac"} />
      <PreviousOrderItem count={3} name={"Grand BigMac"} />
      {/* <PreviousOrderItem count={3} name={"Grand BigMac"} /> */}
      <Box className="w-full flex gap-4">
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
        >
          Details
        </Button>
        <Button
          fullWidth
          variant="text"
          color="secondary"
          sx={{ bgcolor: "#FB6D3A1A" }}
        >
          Get help
        </Button>
      </Box>
    </Box>
  );
};
export default PreviousOrdersCard;
