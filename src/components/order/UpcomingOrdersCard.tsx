import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme";
import { PiClockCountdownThin } from "react-icons/pi";
import ProgressBar from "./Progressbar";
import { useEffect, useState } from "react";

const UpcomingOrdersCard = () => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const islgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const confirmationTime = 10;
  const foodPreparationTime = 10;
  const deliveryTime = 30;
  const initialTotalTime =
    confirmationTime + foodPreparationTime + deliveryTime;
  const [remainingTime, setRemainingTime] = useState(initialTotalTime);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [hasPrepared, setHasPrepared] = useState(false);
  const [hasDeliverd, setHasDeliverd] = useState(false);

  // ...

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ...

  useEffect(() => {
    if (initialTotalTime - remainingTime === confirmationTime) {
      setHasConfirmed(true);
    } else if (
      initialTotalTime - remainingTime ===
      confirmationTime + foodPreparationTime
    ) {
      setHasPrepared(true);
    } else if (initialTotalTime - remainingTime === initialTotalTime) {
      setHasDeliverd(true);
    }
  }, [remainingTime]);

  return (
    <Box
      className=" min-h-40 min-w-72 bg-neutral-100"
      width={islgScreen ? "30%" : isMdScreen ? "45%" : "100%"}
      sx={{
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <Box className="flex h-full flex-row w-full justify-between">
        <Typography variant="body2" fontWeight={"bold"} color={"#182135"}>
          Burger King
        </Typography>
        <Typography variant="body2">#kjd56s</Typography>
      </Box>
      <Box className="flex w-full items-center justify-between">
        <Box className="flex flex-row gap-3 items-center">
          <PiClockCountdownThin size={25} />
          <Box>
            <Typography variant="body2">Estimated arrival</Typography>
            <Typography variant="h5" fontWeight={"bold"}>
              {remainingTime} min
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "80px" }}>
          Track
        </Button>
      </Box>

      <Box className=" flex  justify-between">
        <ProgressBar width={17} totalTime={confirmationTime} start={true} />
        <ProgressBar
          width={27}
          totalTime={foodPreparationTime}
          start={hasConfirmed}
        />
        <ProgressBar width={50} totalTime={deliveryTime} start={hasPrepared} />
      </Box>
    </Box>
  );
};
export default UpcomingOrdersCard;
