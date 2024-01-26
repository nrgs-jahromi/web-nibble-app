import { Box, Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineStoreMallDirectory, MdRestaurant } from "react-icons/md";
import RestaurantImg from "../../assets/RestaurantImg.png";
import FoodImg from "../../assets/FoodImg.png";
// import { Restaurant } from "@mui/icons-material";
import { Food } from "../food/Food";
import { Restaurant } from "../restaurant/Restaurant";
import theme from "../../theme";
import { useFavFoodList } from "../../api/food/getAllFavFood";
import { useFavRestaurantList } from "../../api/restaurant/getAllFavRes";
import { generateRandomNumber } from "../../util/random";

const FavoritePage = () => {
  const [selected, setSelected] = useState("Restaurant");
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [foods, setFoods] = useState<FoodT[]>();
  const [restaurant, setRestaurant] = useState();
  const { data: favFoods, isLoading, isError } = useFavFoodList();
  const { data: favRes } = useFavRestaurantList();
  const randomNumber = generateRandomNumber();
  const selectFoodHandler = () => {
    setSelected("Food");
  };
  const selectRestaurantHandler = () => {
    setSelected("Restaurant");
  };

  useEffect(() => {
    setFoods(favFoods);
  }, [favFoods, isLoading]);
  return (
    <Box
      className="w-full flex flex-col overflow-auto gap-6"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Box className="flex flex-row  gap-4">
        <Button
          startIcon={<MdRestaurant />}
          fullWidth={isMdScreen}
          variant={selected === "Restaurant" ? "contained" : "outlined"}
          onClick={selectRestaurantHandler}
        >
          Restaurants ({favRes?.length})
        </Button>
        <Button
          startIcon={<MdOutlineStoreMallDirectory />}
          fullWidth={isMdScreen}
          variant={selected === "Food" ? "contained" : "outlined"}
          onClick={selectFoodHandler}
        >
          Dishes ({favFoods?.length})
        </Button>
      </Box>
      <Box className="flex flex-row flex-wrap w-full justify-start gap-y-6 gap-x-5">
        {selected === "Food"
          ? foods?.length !== 0
            ? foods.map((food, index) => (
                <Food
                  key={index}
                  id={food.id}
                  image={food.picture}
                  // image={FoodImg}
                  name={food.name}
                  event={"free Delivery"}
                  rate={food.rate}
                  rateNum={randomNumber * (index + 1)}
                  type={food.category}
                  minDelivery={food.prepare_time}
                  maxDelivery={food.prepare_time + 10}
                />
              ))
            : "no favorite food has selected"
          : favRes?.map((restaurant, index) => (
              <Restaurant
                key={index}
                id={restaurant.id}
                // img={restaurant.img}
                img={RestaurantImg}
                name={restaurant.name}
                rate={restaurant.rate}
                rateNum={randomNumber * (index + 1)}
                food={restaurant.category}
                type={restaurant.features[0].name}
                distance={restaurant.city}
                price={restaurant.price_rating}
              />
            ))}
      </Box>
    </Box>
  );
};
export default FavoritePage;
