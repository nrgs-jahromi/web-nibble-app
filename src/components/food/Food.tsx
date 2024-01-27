import { Box, Typography, useMediaQuery } from "@mui/material";
import { PiMotorcycleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { FC, useState } from "react";
import theme from "../../theme";
import IconBox from "../baseComponents/IconBox";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAddFoodToFav } from "../../api/food/addFavFood";
import { useDeleteFoodFromFav } from "../../api/food/deleteFavFood";
import { IoMdAdd } from "react-icons/io";
import { useAddFoodToCart } from "../../api/cart/addToCart";

type Props = {
  id?: number;
  name: string;
  event: string;
  rate: number;
  rateNum: string;
  type: string;
  minDelivery: number;
  maxDelivery: number;
  image: string;
  hasAddIcon?: boolean;
};

export const Food: FC<Props> = ({
  name,
  id,
  event,
  rate,
  rateNum,
  type,
  minDelivery,
  maxDelivery,
  image,
  hasAddIcon,
}) => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [favorite, setFavorite] = useState(false);
  // const data = { params: { id: id } };

  const { isLoading: isAddingToFav, mutate: addToFav } = useAddFoodToFav();
  const { isLoading: isDeletingFromFav, mutate: deleteFromFav } =
    useDeleteFoodFromFav();
  const { isLoading: isAddingToCart, mutate: addToCart } = useAddFoodToCart();
  const onFavoriteClickHandler = () => {
    setFavorite(!favorite);
    // Toggle favorite status and make API call accordingly
    if (!favorite) {
      addToFav({ params: { id: id } });
    } else {
      deleteFromFav({ params: { id: id } });
    }
  };
  // const { mutate: logout, isSuccess: logoutSuccessfully } = useUserLogout();

  const addtocart = (id: number) => {
    addToCart({ params: { food_id: id } });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={1}
      width={islgScreen ? "30%" : isMdScreen ? "45%" : "100%"}
      sx={
        {
          // height: isMdScreen ? "230px" : "40vw",
        }
      }
    >
      <Box
        className="w-full h-[180px] object-cover rounded-xl"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          textAlign: "center",
          justifyContent: "flex-end",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          borderRadius: "16px",
          padding: "15px",
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

      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="body1" fontWeight={"bold"}>
          {name}
        </Typography>
        <span className="text-xs bg-[#503E9D1A] text-[#503E9D] padding px-2 py-1 rounded-md">
          {event}
        </span>
      </Box>
      <Box sx={{ maxWidth: "250px" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <FaStar className="text-yellow-300" />
            <span className="text-xs font-bold">{rate}</span>
            <span className="text-xs text-gray-400">({rateNum})</span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <MdOutlineRestaurant color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">{type}</span>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <PiMotorcycleFill color="rgb(156, 163, 175)" />
            <span className="text-xs text-gray-400">
              {minDelivery} - {maxDelivery} min
            </span>
          </Box>
          {hasAddIcon && (
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={0.5}
              onClick={() => addtocart(id)}
            >
              <IoMdAdd color="rgb(156, 163, 175)" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
