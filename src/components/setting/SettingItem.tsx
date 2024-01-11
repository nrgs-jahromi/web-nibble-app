import React from "react";
import { Box, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import theme from "../../theme";
import { IconType } from "react-icons";

interface SettingItemProps {
  icon: IconType;
  text: string;
  color?: string;
  onClick?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon: Icon,
  text,
  color,
  onClick,
}) => (
  <Box
    className="w-full flex flex-row justify-between h-10 items-center"
    onClick={onClick}
  >
    <Box className="flex flex-row gap-4 items-center">
      <Icon color={color || theme.palette.primary.main} size={20} />
      <Typography variant="body1" fontSize={"14px"} fontWeight="bold">
        {text}
      </Typography>
    </Box>
    <IoIosArrowForward />
  </Box>
);

export default SettingItem;
