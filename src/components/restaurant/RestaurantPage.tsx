import { Box, Button, Typography } from "@mui/material";
import FoodImg from "../../assets/FoodImg.png";
import logoImg from "../../assets/RestaurantImg.png";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import theme from "../../theme";
import IconBox from "../baseComponents/IconBox";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { useState } from "react";
import { Food } from "../food/Food";
import { useParams } from "react-router";
import { useRestaurantInformation } from "../../api/restaurant/getRestaurantInfo";
const RestaurantPage = () => {
  const [favorite, setFavorite] = useState(false);
  const param = useParams();
  const foodsData = [
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Burgers",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Fries",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Burgers",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Fries",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Drinks",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 4.8,
      rateNum: "12,123",
      type: "Nuggets",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 3.8,
      rateNum: "12,123",
      type: "Wraps",
      minDelivery: 12,
      maxDelivery: 15,
    },
    {
      image: FoodImg,
      name: "salad malad",
      event: "Free Delivery",
      rate: 1.8,
      rateNum: "12,123",
      type: "Wraps",
      minDelivery: 12,
      maxDelivery: 15,
    },
  ];
  const [selectedType, setSelectedType] = useState("All"); // default selection
  const {
    data: restaurantInfo,
    isLoading,
    isError,
  } = useRestaurantInformation({ params: { id: param.restaurantid } });
  const handleTypeSelection = (type: any) => {
    setSelectedType(type);
  };

  const filteredFoods =
    selectedType === "All"
      ? foodsData
      : selectedType === "Popular"
      ? foodsData.filter((food) => food.rate >= 4)
      : foodsData.filter((food) => food.type === selectedType);

  const getFilteredFoodsCount = (type: any) => {
    return type === "All"
      ? foodsData.length
      : type === "Popular"
      ? foodsData.filter((food) => food.rate >= 4).length
      : foodsData.filter((food) => food.type === type).length;
  };
  const onFavoriteClickHandler = () => {
    setFavorite(!favorite);
  };
  return (
    <Box
      className="w-full flex items-center flex-col overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Box
        flexBasis={"30%"}
        sx={{
          minHeight: "25vh",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          textAlign: "center",
          justifyContent: "flex-end",
          backgroundImage: `url(${restaurantInfo?.background_pic})`,
          backgroundSize: "cover",
          borderRadius: "16px",
          padding: "15px",
          //   "@media screen and (max-width: 768px)": {
          //     flexBasis: "30%",
          //     borderRadius: "0 0 24px 24px",
          //   },
        }}
      >
        <IconBox
          onClick={onFavoriteClickHandler}
          icon={
            favorite ? (
              <IoHeart color={theme.palette.secondary.main} />
            ) : (
              <IoHeartOutline color="black" />
            )
          }
          color={theme.palette.grey[50]}
          size={48}
          borderRadius="10px"
        />
      </Box>
      <img
        src={restaurantInfo?.icon}
        height={"80px"}
        width={"80px"}
        style={{ marginTop: "-50px" }}
      />
      <Box className="w-full flex flex-col justify-start">
        {" "}
        <Box className="flex w-full justify-between flex-col md:flex-row">
          <Box className="mb-4">
            <Typography variant="h6" fontWeight={"bold"}>
              {restaurantInfo?.name}
            </Typography>
            <Typography variant="body2">
              {restaurantInfo?.description}
            </Typography>
          </Box>
          <Box className="flex  w-fit gap-5 justify-between mb-4">
            {restaurantInfo?.features.map((feature) => (
              <span className="text-xs  min-w-fit h-fit bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
                {feature.name}
              </span>
            ))}
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
          className="w-full md:w-fit"
        >
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <FaStar className="text-yellow-300" />
            <span className="text-xs font-bold">{restaurantInfo?.rate}</span>
            <span className="text-xs text-gray-400">(1,873)</span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <MdOutlineRestaurant color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">
              {restaurantInfo?.category}
            </span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <RiMoneyDollarBoxLine color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">
              {restaurantInfo?.price_rating}$
            </span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <TbCurrentLocation color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">
              {restaurantInfo?.address}
            </span>
          </Box>
        </Box>
        <Box className="flex w-full overflow-auto gap-3 mt-4">
          <Button
            size="small"
            onClick={() => handleTypeSelection("All")}
            variant={selectedType === "All" ? "contained" : "text"}
            sx={{
              bgcolor: selectedType !== "All" ? theme.palette.common.white : "",
              minWidth: "fit-content",
              height: "fit-content  ",
            }}
          >
            All ({getFilteredFoodsCount("All")})
          </Button>
          <Button
            size="small"
            onClick={() => handleTypeSelection("Popular")}
            variant={selectedType === "Popular" ? "contained" : "text"}
            sx={{
              bgcolor:
                selectedType !== "Popular" ? theme.palette.common.white : "",
              minWidth: "fit-content",
              height: "fit-content  ",
            }}
          >
            Popular ({getFilteredFoodsCount("Popular")})
          </Button>
          {Array.from(new Set(foodsData.map((food) => food.type))).map(
            (type) => (
              <Button
                size="small"
                key={type}
                onClick={() => handleTypeSelection(type)}
                variant={selectedType === type ? "contained" : "text"}
                sx={{
                  bgcolor:
                    selectedType !== type ? theme.palette.common.white : "",
                  minWidth: "fit-content",
                  height: "fit-content  ",
                }}
              >
                {type} ({getFilteredFoodsCount(type)})
              </Button>
            )
          )}
        </Box>
        <Box className="flex flex-wrap  gap-4 mt-4">
          {filteredFoods.map((food, index) => (
            <Food
              key={index}
              // id={food.id}
              image={food.image}
              name={food.name}
              event={food.event}
              rate={food.rate}
              rateNum={food.rateNum}
              type={food.type}
              minDelivery={food.minDelivery}
              maxDelivery={food.maxDelivery}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default RestaurantPage;
