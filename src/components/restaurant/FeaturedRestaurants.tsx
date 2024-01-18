import { Box, Button, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Restaurant } from "./Restaurant";
import RestaurantImg from "../../assets/RestaurantImg.png";

export const FeaturedRestaurants = () => {
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
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignContent={"flex-start"}
        gap={1}
      >
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
        <Restaurant
          img={RestaurantImg}
          name="Burger King"
          rate={4.2}
          rateNum="12,124"
          food="burger"
          type="Free Delivery"
          distance={4.2}
          price={3}
        />
      </Box>
    </Box>
  );
};
