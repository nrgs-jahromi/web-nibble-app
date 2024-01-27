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
import { useNavigate } from "react-router";

export const Categories = () => {
  const navigate = useNavigate();
  const categoriesData = [
    {
      icon: <BsFire />,
      path: "popular",
      title: "Popular",
      description: "286+ options",
      color: theme.palette.secondary.main,
    },
    {
      icon: <MdOutlineDeliveryDining />,
      path: "free-delivery",
      title: "Free delivery",
      description: "286+ options",
      color: theme.palette.primary.main,
    },
    {
      icon: <MdOutlineAccountBalanceWallet />,
      path: "highclass",
      title: " High class",
      description: "286+ options",
      color: theme.palette.warning.main,
    },
    {
      icon: <MdRestaurant />,
      path: "dine-in",
      title: "Dine in",
      description: "286+ options",
      color: theme.palette.secondary.main,
    },
    {
      icon: <MdOutlineStoreMallDirectory />,
      path: "open",
      title: "Open now",
      description: "286+ options",
      color: theme.palette.primary.main,
    },
    {
      icon: <CiMap />,
      path: "nearest",
      title: "Nearest",
      description: "286+ options",
      color: theme.palette.warning.main,
    },
  ];

  const selectCategory = (path: string) => {
    navigate(path);
  };

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
          <CategoryItem
            key={index}
            {...category}
            onClick={() => selectCategory(category.path)}
          />
        ))}
      </Box>
    </Box>
  );
};
