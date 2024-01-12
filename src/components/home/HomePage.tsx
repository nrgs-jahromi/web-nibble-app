import { Box } from "@mui/material";
import { FeaturedRestaurants } from "../restaurant/FeaturedRestaurants";
import { HomeFoods } from "../food/HomeFoods";
import { Categories } from "../homeCategories/Categories";

const HomePage = () => {
  return (
    <Box
      className="w-full flex flex-col gap-6 overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Categories />
      <FeaturedRestaurants />
      <HomeFoods />
    </Box>
  );
};
export default HomePage;
