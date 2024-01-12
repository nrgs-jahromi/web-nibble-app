import { Box } from "@mui/material";
import { FeaturedRestaurants } from "../restaurant/FeaturedRestaurants";
import { HomeFoods } from "../food/HomeFoods";

const HomePage = () => {
  return (
    <Box
      className="w-full flex flex-col overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <FeaturedRestaurants />
      <HomeFoods />
    </Box>
  );
};
export default HomePage;
