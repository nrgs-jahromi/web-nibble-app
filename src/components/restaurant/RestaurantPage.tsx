import { Box, IconButton, Typography } from "@mui/material";
import FoodImg from "../../assets/FoodImg.png";
import logoImg from "../../assets/RestaurantImg.png";
import { IoHeartOutline } from "react-icons/io5";
import theme from "../../theme";
import IconBox from "../baseComponents/IconBox";
const RestaurantPage = () => {
  return (
    <Box className="w-full h-full flex items-center flex-col overflow-auto">
      <Box
        flexBasis={"30%"}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          textAlign: "center",
          justifyContent: "flex-end",
          backgroundImage: `url(${FoodImg})`,
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
          icon={<IoHeartOutline color="black" />}
          color={theme.palette.grey[50]}
          size={48}
          borderRadius="10px"
        />
      </Box>
      <img
        src={logoImg}
        height={"80px"}
        width={"80px"}
        style={{ marginTop: "-50px" }}
      />
      <Box className="flex w-full justify-between">
        <Box>
          <Typography variant="h6" fontWeight={"bold"}>
            Burger King
          </Typography>
          <Typography variant="body2">
            It is one of the most iconic and well-recognizable fast food
            restaurants out there which offers really amazing food and drinks.
          </Typography>
        </Box>
        <Box className="flex  w-full justify-between">
          <span className="text-xs w-24  bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
            Free Delivery
          </span>
          <span className="text-xs bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1  rounded-md">
            Free Delivery
          </span>
          <span className="text-xs bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
            Free Delivery
          </span>
        </Box>
      </Box>
    </Box>
  );
};
export default RestaurantPage;
