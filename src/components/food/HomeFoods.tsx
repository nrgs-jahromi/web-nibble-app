import { Box, Button, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
// import { useFavFoodList } from "./useFavFoodList"; // Import the hook
import FoodImg from "../../assets/FoodImg.png";
import { Food } from "./Food";
import { useFavFoodList } from "../../api/food/getAllFavFood";
import { generateRandomNumber } from "../../util/random";

export const HomeFoods = () => {
  // Use the useFavFoodList hook to fetch data
  const { data: favFoods, isLoading, isError } = useFavFoodList();
  const randomNumber = generateRandomNumber();

  return (
    <Box maxWidth={1200} width={"100%"}>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
        <Typography variant="h6" fontWeight={"bold"}>
          Foods
        </Typography>
        <Button size="small" endIcon={<FaAngleRight />}>
          See all
        </Button>
      </Box>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error fetching data</Typography>
      ) : (
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignContent={"flex-start"}
          gap={3}
        >
          {favFoods.slice(0, 3).map((food, index) => (
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
          ))}
        </Box>
      )}
    </Box>
  );
};
