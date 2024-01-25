import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Restaurant } from "./Restaurant";
import RestaurantImg from "../../assets/RestaurantImg.png";
import theme from "../../theme";

export const FeaturedRestaurants = () => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
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
