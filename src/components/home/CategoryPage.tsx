import { Box, Button, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Food } from "../food/Food";
import FoodImg from "../../assets/FoodImg.png";
import { useParams } from "react-router";

const CategoryPage = () => {
  const param = useParams();

  return (
    <Box
      className="w-full flex flex-col gap-6 overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Box maxWidth={1200} width={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
          <Typography variant="h6" fontWeight={"bold"}>
            {param.category}
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
          gap={3}
        >
          <Food
            image={FoodImg}
            name="salad malad"
            event="Free Delivery"
            rate={4.8}
            rateNum="12,123"
            type="Asian"
            minDelivery={12}
            maxDelivery={15}
          />
          <Food
            image={FoodImg}
            name="salad malad"
            event="Free Delivery"
            rate={4.8}
            rateNum="12,123"
            type="Asian"
            minDelivery={12}
            maxDelivery={15}
          />
          <Food
            image={FoodImg}
            name="salad malad"
            event="Free Delivery"
            rate={4.8}
            rateNum="12,123"
            type="Asian"
            minDelivery={12}
            maxDelivery={15}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CategoryPage;
