import { Box, Typography, colors } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { FC } from "react";

type Props = {
  img: string;
  name: string;
  rate: number;
  rateNum: string;
  food: string;
  type: string;
  price: number;
  distance: number;
};

export const Restaurant: FC<Props> = ({
  img,
  name,
  rate,
  rateNum,
  food,
  type,
  price,
  distance,
}) => {
  const currencySymbol: string = "$";
  const displayPrice = currencySymbol.repeat(price);
  return (
    <Box sx={{ display: "flex", width: "336px", alignItems: "center" }} gap={1}>
      <Box
        sx={{
          width: "84px",
          minWidth: "84px",
          height: "84px",
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          // padding: ".5rem",
        }}
      >
        <img src={img} alt={name} className="h-full w-full" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "90px", padding: ".5rem" }}
      >
        <Typography fontWeight={700} fontSize={14} variant="h4">
          {name}
        </Typography>
        <Box sx={{ width: "100%" }}>
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
              <span className="text-xs text-gray-400">{food}</span>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={0.5}>
              <RiMoneyDollarBoxLine color="rgb(156, 163, 175)" />
              <span className="text-xs text-gray-400">{displayPrice}</span>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={1}>
          <span className="text-xs bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
            {type}
          </span>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <TbCurrentLocation color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">{distance}km</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
