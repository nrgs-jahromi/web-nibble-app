import { Box } from "@mui/material";
import { FeaturedRestaurants } from "../restaurant/FeaturedRestaurants";
import { HomeFoods } from "../food/HomeFoods";

const HomePage = () => {
  return (
    <Box>
      <FeaturedRestaurants />
      <HomeFoods />
    </Box>
  );
};
export default HomePage;
