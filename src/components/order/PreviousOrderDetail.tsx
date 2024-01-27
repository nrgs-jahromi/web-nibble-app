import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import theme from "../../theme";
import { IoClose } from "react-icons/io5";
import IconBox from "../baseComponents/IconBox";
import { Button, Typography } from "@mui/material";
import { Grid, Rating } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import cardLogo from "../../assets/cardLogo.png";
import { useOrderInformation } from "../../api/order/getOrderInfo";

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
  id: number;
}

export default function PreviousOrderDrawer({
  open,
  onClose,
  id,
}: ProfileDrawerProps) {
  const {
    data: orderInfo,
    isLoading,
    isError,
  } = useOrderInformation({ params: { id: id } });

  // const orderInfo = {
  //   id: 3,
  //   order_items: [
  //     {
  //       id: 5,
  //       food: {
  //         id: 5,
  //         name: "Sushi Delight",
  //         category: "AS",
  //         rate: "4.6",
  //         prepare_time: 2,
  //         price: "13.00",
  //         picture: null,
  //         restaurant: 4,
  //       },
  //       quantity: 1,
  //       order: 3,
  //     },
  //   ],
  //   credit_card: {
  //     id: 2,
  //     card_number: "1111-1111-1111-1111",
  //     user: 11,
  //   },
  //   order_number: "ZPCQST23",
  //   review: "2.6",
  //   total_price: "0.00",
  //   registration_time: "2024-01-26T08:05:50.329513Z",
  //   delivery_time: "2024-01-26T08:05:46Z",
  //   status: "UC",
  //   time_prepare_foods: 0,
  //   user: 5,
  //   restaurant: 4,
  //   delivery_address: 3,
  // };
  const [ratingValue, setRatingValue] = useState<number | null>(
    parseFloat(orderInfo?.review)
  );

  return (
    <Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            borderRadius: "24px 0px 0px 24px",
            p: 3,
          },
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={4}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Order Details
          </Typography>
          <IconBox
            onClick={onClose}
            icon={<IoClose color="black" />}
            size={48}
            color="white"
            borderRadius="16px"
          />
        </Grid>
        <Grid container direction="row" wrap="nowrap" paddingBottom={2}>
          <Grid container direction="column">
            <Typography
              fontSize={12}
              fontWeight={"bold"}
              sx={{ textTransform: "uppercase" }}
              color={theme.palette.secondary.main}
            >
              delivered to
            </Typography>
            <Typography fontSize={16} fontWeight={"bold"}>
              {orderInfo?.delivery_address}
            </Typography>
          </Grid>
          <IconBox
            icon={<IoIosArrowForward color={theme.palette.grey[500]} />}
            size={48}
            color="white"
            borderRadius="16px"
          />
        </Grid>
        <Typography variant="h6" fontWeight={"bold"}>
          {orderInfo?.restaurant}
        </Typography>
        {orderInfo?.order_items.map((item, index) => {
          return (
            <Grid key={index} className="flex flex-row justify-between">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                <Grid container gap={2} alignItems="center">
                  <Box
                    bgcolor={theme.palette.grey[50]}
                    width={32}
                    height={32}
                    borderRadius={1}
                    className="flex justify-center items-center "
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={"bold"}
                      color={theme.palette.grey[800]}
                    >
                      {item.quantity}
                    </Typography>
                  </Box>

                  <Typography align="left" fontSize={16} fontWeight={"bold"}>
                    {item.food}
                  </Typography>
                </Grid>
                <Typography variant="body1" fontWeight={400}>
                  {item.quantity}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
        <Grid container paddingY={3} gap={2}>
          <Grid container justifyContent="space-between">
            <Typography variant="body1" fontWeight={"bold"}>
              Subtotal
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              {orderInfo?.total_price}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant="body1" fontWeight={"bold"}>
              Delivery fee
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              5$
              {
                //resturant api
              }
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant="body1" fontWeight={"bold"}>
              Total
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              {orderInfo?.total_price}$
              {
                // delivery fee + subtotal
              }
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant="body1" fontWeight={"bold"}>
              Credit card
            </Typography>
            {/* <img width={20} height="50" src={cardLogo} /> */}
            <Typography variant="body1" fontWeight={400}>
              ●●●●
              {orderInfo?.credit_card.split("-")[3]}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Typography variant="h6" fontWeight={"bold"}>
            Review your order
          </Typography>
          <Grid container>
            <Rating
              name="simple-controlled"
              // defaultValue={orderInfo.}
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          height="50px"
          className="flex flex-start gap-2 py-5 w-full"
        >
          <Button
            color="warning"
            sx={{ borderRadius: "10px" }}
            variant="contained"
          >
            <AiOutlineUserAdd size={25} />
          </Button>
          <Button
            variant="contained"
            className="rounded-xl"
            sx={{ flexGrow: 2, borderRadius: "10px" }}
          >
            Place new order
          </Button>
        </Grid>
      </Drawer>
    </Box>
  );
}
