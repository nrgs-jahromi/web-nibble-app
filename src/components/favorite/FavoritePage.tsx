import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
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
  const { data: favFoods, isLoading, isError } = useFavFoodList();
  const { data: favRes } = useFavRestaurantList();
  const randomNumber = generateRandomNumber();
  const selectFoodHandler = () => {
    setSelected("Food");
  };
  const selectRestaurantHandler = () => {
    setSelected("Restaurant");
  };

  const restaurantsData = [
    {
      img: RestaurantImg,
      name: "Burger King",
      rate: 4.2,
      rateNum: "12,124",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King2",
      rate: 3.2,
      rateNum: "12,353",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King",
      rate: 4.2,
      rateNum: "12,124",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King2",
      rate: 3.2,
      rateNum: "12,353",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King",
      rate: 4.2,
      rateNum: "12,124",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King2",
      rate: 3.2,
      rateNum: "12,353",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King",
      rate: 4.2,
      rateNum: "12,124",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
    {
      img: RestaurantImg,
      name: "Burger King2",
      rate: 3.2,
      rateNum: "12,353",
      food: "burger",
      type: "Free Delivery",
      distance: 4.2,
      price: 3,
    },
  ];

  const foodsData = [
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Asian",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Asian",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Asian",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Asian",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Asian",
      minDelivery: 12,
      maxDelivery: 15,
    },
  ];
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
          Restaurants ({restaurantsData.length})
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
          ? favFoods?.length !== 0
            ? favFoods.map((food, index) => (
                <Food
                  key={index}
                  // image={food.picture}
                  image={FoodImg}
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
                img={restaurant.img}
                name={restaurant.name}
                rate={restaurant.rate}
                rateNum={randomNumber * (index + 1)}
                food={restaurant.food}
                type={restaurant.type}
                distance={restaurant.distance}
                price={restaurant.price}
              />
            ))}
      </Box>
    </Box>
  );
};
export default FavoritePage;
