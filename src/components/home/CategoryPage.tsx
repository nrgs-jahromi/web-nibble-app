import { Box, Button, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Food } from "../food/Food";
import FoodImg from "../../assets/FoodImg.png";
import { useParams } from "react-router";
import { generateRandomNumber } from "../../util/random";
import { useRestaurantsList } from "../../api/restaurant/getAllRestaurants";
import { Restaurant } from "../restaurant/Restaurant";
import { usePopularResList } from "../../api/restaurant/getAllPopularRes";
import { usefreeDelResList } from "../../api/restaurant/getAllFreeDelRes";
import { useHighClassResList } from "../../api/restaurant/getAllHighClassRes";
import { useDineinResList } from "../../api/restaurant/getAllDineinRes";

const CategoryPage = () => {
  const param = useParams();

  const randomNumber = generateRandomNumber();
  const filters = new Map([
    ["popular", { url: "popular", api: usePopularResList(), title: "Popular" }],
    [
      "free-delivery",
      {
        url: "free-delivery",
        api: usefreeDelResList(),
        title: "Free delivery",
      },
    ],
    [
      "highclass",
      { url: "highclass", api: useHighClassResList(), title: "high Class" },
    ],
    ["dine-in", { url: "dine-in", api: useDineinResList(), title: "Dine In" }],
    // ["open", { url: "open", api: "", title: "Open Now" }],
    // ["nearest", { url: "nearest", api: , title: "Nearest" }],
  ]);
  const filterTitle = filters.get(param.category)?.title || "All Restaurants";
  const filterApi = filters.get(param?.category)?.api;

  const { data: restaurantsData } = filterApi || {};
  return (
    <Box
      className="w-full flex flex-col gap-6 overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Box maxWidth={1200} width={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
          <Typography variant="h6" fontWeight={"bold"}>
            {filterTitle}
          </Typography>
          <Button size="small" endIcon={<FaAngleRight />}>
            See all
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          // justifyContent={"space-between"}
          alignContent={"flex-start"}
          gap={3}
        >
          {restaurantsData &&
            restaurantsData?.map((rest) => (
              <Restaurant
                key={rest.id}
                id={rest.id}
                img={rest.icon}
                name={rest.name}
                rate={rest.rate}
                rateNum={randomNumber * (rest.id + 1)}
                food={rest.category}
                type="Free Delivery"
                distance={rest.city}
                price={rest.price_rating}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};
export default CategoryPage;
