import { Box, Typography } from "@mui/material";
import UpcomingOrdersCard from "./UpcomingOrdersCard";
import PreviousOrdersCard from "./PreviousOrdersCard";

const OrderPage = () => {
  return (
    <Box
      className="w-full flex flex-col gap-6 overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Typography variant="h6" fontWeight="bold">
        Upcoming orders
      </Typography>
      <Box className="flex flex-wrap max-w-full gap-5 ">
        <UpcomingOrdersCard />
      </Box>
      <Typography variant="h6" fontWeight="bold">
        Previous orders
      </Typography>
      <Box className="flex flex-wrap max-w-full gap-5 ">
        <PreviousOrdersCard />
        <PreviousOrdersCard />
        <PreviousOrdersCard />
        <PreviousOrdersCard />
        <PreviousOrdersCard />
      </Box>
    </Box>
  );
};
export default OrderPage;
