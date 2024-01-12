import { Box, Button, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import theme from "../../theme";
import { BsFire } from "react-icons/bs";

import { CiMap } from "react-icons/ci";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineDeliveryDining,
  MdOutlineStoreMallDirectory,
  MdRestaurant,
} from "react-icons/md";
import CategoryItem from "./CategoryItem";

export const Categories = () => {
  const categoriesData = [
    {
      icon: <BsFire />,
      title: "Popular",
      description: "286+ options",
      color: theme.palette.secondary.main,
    },
    {
      icon: <MdOutlineDeliveryDining />,
      title: "Free delivery",
      description: "286+ options",
      color: theme.palette.primary.main,
    },
    {
      icon: <MdOutlineAccountBalanceWallet />,
      title: " High class",
      description: "286+ options",
      color: theme.palette.warning.main,
    },
    {
      icon: <MdRestaurant />,
      title: "Dine in",
      description: "286+ options",
      color: theme.palette.secondary.main,
    },
    {
      icon: <MdOutlineStoreMallDirectory />,
      title: "Open now",
      description: "286+ options",
      color: theme.palette.primary.main,
    },
    {
      icon: <CiMap />,
      title: "Nearest",
      description: "286+ options",
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Box maxWidth="100%">
      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Typography variant="h6" fontWeight="bold">
          Explore categories
        </Typography>
        <Button size="small" endIcon={<FaAngleRight />}>
          See all
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="flex-start"
        gap={1}
        maxWidth={"calc(100vw -344px)"}
        overflow="auto"
      >
        {categoriesData.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </Box>
    </Box>
  );
};
