import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Restaurant } from "./Restaurant";
import RestaurantImg from "../../assets/RestaurantImg.png";
import theme from "../../theme";
import { generateRandomNumber } from "../../util/random";
import { useRestaurantsList } from "../../api/restaurant/getAllRestaurants";

export const FeaturedRestaurants = () => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const { data: restList, isLoading, isError } = useRestaurantsList();
  const randomNumber = generateRandomNumber();
  return (
    <Box maxWidth={"100%"}>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
        <Typography variant="h6" fontWeight={"bold"}>
          Restaurant nearby
        </Typography>
        <Button size="small" endIcon={<FaAngleRight />}>
          See all
        </Button>
      </Box>
      <Box
        maxWidth={"100%"}
        overflow={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"flex-start"}
        gap={1}
        className="flex-nowrap xl:flex-wrap"
      >
        {restList?.slice(0, 6).map((rest) => (
          <Restaurant
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
  );
};
