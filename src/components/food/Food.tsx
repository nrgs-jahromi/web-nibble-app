import { Box, Typography, useMediaQuery } from "@mui/material";
import { PiMotorcycleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { FC } from "react";
import theme from "../../theme";

type Props = {
  name: string;
  event: string;
  rate: number;
  rateNum: string;
  type: string;
  minDelivery: number;
  maxDelivery: number;
  image: string;
};

export const Food: FC<Props> = ({
  name,
  event,
  rate,
  rateNum,
  type,
  minDelivery,
  maxDelivery,
  image,
}) => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={1}
      width={islgScreen ? "30%" : isMdScreen ? "45%" : "100%"}
      sx={
        {
          // height: isMdScreen ? "230px" : "40vw",
        }
      }
    >
      <img
        className={
          "w-full h-[180px] object-cover rounded-xl"
          // isMdScreen
          // ? "w-[330px] h-[180px] object-cover rounded-xl"
          // : "w-[100%] h-[40vw] object-cover rounded-xl"
        }
        src={image}
        alt="Food Name"
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="body1" fontWeight={"bold"}>
          {name}
        </Typography>
        <span className="text-xs bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
          {event}
        </span>
      </Box>
      <Box sx={{ maxWidth: "250px" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <FaStar className="text-yellow-300" />
            <span className="text-xs font-bold">{rate}</span>
            <span className="text-xs text-gray-400">({rateNum})</span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <MdOutlineRestaurant color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">{type}</span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <PiMotorcycleFill color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">
              {minDelivery} - {maxDelivery} min
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
