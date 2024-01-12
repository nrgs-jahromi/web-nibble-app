import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import IconBox from "../baseComponents/IconBox";

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string; // You may want to use a more specific type for color
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  title,
  description,
  color,
}: CategoryItemProps) => {
  return (
    <Box
      className="h-20 min-w-44 rounded-xl flex flex-row justify-evenly items-center"
      style={{ backgroundColor: theme.palette.grey[50] }}
    >
      <IconBox size={48} icon={icon} color={color} borderRadius="10px" />
      <Box className="flex flex-col items-center">
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </Box>
    </Box>
  );
};

export default CategoryItem;
