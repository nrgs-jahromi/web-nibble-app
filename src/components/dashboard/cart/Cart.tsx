import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, IconButton, List, ListItem, Typography } from "@mui/material";
import theme from "../../../theme";
import IconBox from "../../baseComponents/IconBox";
import { IoClose } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import FoodImg from "../../../assets/FoodImg.png";
import CartItem from "./CartItem";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeliveryDining, MdOutlinePersonAddAlt } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import PersonalInfoModal from "../../setting/PersonalInfoModal";
import PromoCodeModal from "./PromoCodeModal";
import DeliveryAddressModal from "./DeliveryAddressModal";
import { useGetCart } from "../../../api/cart/getCart";

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: ProfileDrawerProps) {
  const [isPromoCodeModalOpen, setIsPromoCodeModalOpen] = useState(false);
  const [isDeliveryAddressModalOpen, setIsDeliveryAddressModalOpen] =
    useState(false);

  const { data: cartData, isSuccess: getCartSuccessfully } = useGetCart();
  const closePromoCodeModal = () => {
    setIsPromoCodeModalOpen(false);
  };
  const closeDeliveryAddressModal = () => {
    setIsDeliveryAddressModalOpen(false);
  };
  const cartItem = cartData?.items;

  // const cartItem = [
  //   {
  //     image: FoodImg,
  //     name: "salad malad",
  //     count: 2,
  //     price: 10,
  //   },
  //   {
  //     image: FoodImg,
  //     name: "salad malad",
  //     price: 10,
  //     count: 2,
  //   },
  //   {
  //     image: FoodImg,
  //     name: "salad malad",
  //     count: 2,
  //     price: 10,
  //   },
  // ];
  return (
    <Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: "400px",
            borderRadius: "24px 0px 0px 24px",
          },
        }}
      >
        <IconButton
          edge="end"
          onClick={onClose}
          sx={{
            borderRadius: "16px",
            padding: "0",
            position: "absolute",
            top: theme.spacing(2),
            right: theme.spacing(4),
            zIndex: "50",
          }}
        >
          <IconBox
            icon={<IoClose color="black" />}
            size={44}
            color={theme.palette.grey[50]}
            borderRadius="16px"
          />
        </IconButton>
        <Box className="w-full h-full py-4 px-6 flex flex-col justify-between overflow-auto">
          {" "}
          <Box className="flex flex-col gap-5">
            <Typography variant="h6" fontWeight={"bold"}>
              My cart{" "}
              <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                ({cartItem?.length})
              </span>
            </Typography>
            <Button
              onClick={() => setIsDeliveryAddressModalOpen(true)}
              variant="text"
              endIcon={<FaAngleRight color={theme.palette.grey[500]} />}
              fullWidth
            >
              <Box className="w-full flex flex-col justify-start">
                <Typography
                  variant="caption"
                  color={theme.palette.secondary.main}
                  textAlign={"left"}
                >
                  Deliver to{" "}
                </Typography>
                <Typography variant="body2" textAlign={"left"}>
                  300 Post Street San Francisco, CA{" "}
                </Typography>
              </Box>
            </Button>
            <Box id="cart-detail" className="w-full">
              <Typography variant="h6" fontWeight={"bold"}>
                {" "}
                restaurantName
              </Typography>
              <List className="w-full">
                {cartItem.map((item) => (
                  <CartItem
                    image={FoodImg}
                    name={item.food.name}
                    count={item.quantity}
                    price={item.price}
                  />
                ))}
              </List>
              <Button size="small" variant="text" startIcon={<IoMdAdd />}>
                Add more items
              </Button>
            </Box>
            <Box className="flex flex-col gap-3">
              <Box className="flex w-full gap-10 ">
                <Box
                  sx={{
                    width: "104px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: theme.palette.warning.light,
                  }}
                >
                  <MdOutlineDeliveryDining
                    color={theme.palette.warning.main}
                    size={30}
                  />
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight={"bold"}>
                    Delivery
                  </Typography>
                  <Typography variant="caption" fontSize={10}>
                    ${cartData?.total_cart_price}
                  </Typography>
                </Box>
              </Box>
              <Box className="flex w-full">
                <Box className="flex w-full gap-10 ">
                  <Box
                    sx={{
                      width: "104px",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: theme.palette.grey[50],
                    }}
                  >
                    <BiSolidDiscount size={30} />
                  </Box>
                  <Box>
                    <Typography variant="body1" fontWeight={"bold"}>
                      Promo code
                    </Typography>
                    <Typography variant="caption" fontSize={10}>
                      HXFWO{" "}
                    </Typography>
                  </Box>
                </Box>
                <IconBox
                  onClick={() => setIsPromoCodeModalOpen(true)}
                  icon={<IoMdAdd color="white" />}
                  color={theme.palette.primary.main}
                  size={44}
                  borderRadius="12px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="flex w-full gap-3 px-6 py-4  sticky bottom-0 bg-white  ">
          <Box
            sx={{
              minWidth: "104px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: theme.palette.warning.main,
            }}
          >
            <MdOutlinePersonAddAlt
              // color={theme.palette.warning.main}
              size={30}
            />
          </Box>
          <Button sx={{ borderRadius: "12px" }} variant="contained" fullWidth>
            <Typography variant="h6">
              Checkout
              <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                (${cartData?.total_price_after_discount})
              </span>
            </Typography>
          </Button>
        </Box>
        <PromoCodeModal
          isOpen={isPromoCodeModalOpen}
          onClose={closePromoCodeModal}
        />
        <DeliveryAddressModal
          isOpen={isDeliveryAddressModalOpen}
          onClose={closeDeliveryAddressModal}
        />
      </Drawer>
    </Box>
  );
}
