import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import mapImg from "../../assets/mapImg.png";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useNavigate } from "react-router";
import { Logout } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { queryClient } from "../../main";
import theme from "../../theme";
import { IoClose } from "react-icons/io5";
import IconBox from "../baseComponents/IconBox";
import ProgressBar from "./Progressbar";
import { PiChatBold, PiCheckBold, PiClockCountdownThin } from "react-icons/pi";
import { CiMap } from "react-icons/ci";

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function OrderDetailDrawer({
  open,
  onClose,
}: ProfileDrawerProps) {
  const confirmationTime = 10;
  const foodPreparationTime = 10;
  const deliveryTime = 30;
  const initialTotalTime =
    confirmationTime + foodPreparationTime + deliveryTime;
  const [remainingTime, setRemainingTime] = useState(initialTotalTime);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [hasPrepared, setHasPrepared] = useState(false);
  const [hasDelivered, setHasDeliverd] = useState(false);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  // ...

  const handleOpenDrawer = () => {
    setIsOrderDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsOrderDrawerOpen(false);
  };

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
    <Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { width: "400px", borderRadius: "24px 0px 0px 24px" },
        }}
      >
        <img src={mapImg} />
        <IconButton
          edge="end"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: theme.spacing(1),
            right: theme.spacing(2),
          }}
        >
          <IconBox
            icon={<IoClose color="black" />}
            size={48}
            color="white"
            borderRadius="16px"
          />
        </IconButton>
        <Box className="px-6 py-4">
          <Box className="flex w-full justify-evenly">
            <Box className="flex flex-row gap-3 items-center">
              <PiClockCountdownThin
                size={25}
                color={theme.palette.secondary.main}
              />
              <Box>
                <Typography variant="caption">Estimated arrival</Typography>
                <Typography variant="h6" fontWeight={"bold"}>
                  {remainingTime} min
                </Typography>
              </Box>
            </Box>
            <Box className="flex flex-row gap-3 items-center">
              <CiMap size={25} color={theme.palette.warning.main} />
              <Box>
                <Typography variant="caption">Distance</Typography>
                <Typography variant="h6" fontWeight={"bold"}>
                  3.6 km
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className=" flex  justify-between">
            <ProgressBar width={17} totalTime={confirmationTime} start={true} />
            <ProgressBar
              width={27}
              totalTime={foodPreparationTime}
              start={hasConfirmed}
            />
            <ProgressBar
              width={50}
              totalTime={deliveryTime}
              start={hasPrepared}
            />
          </Box>
          <Box className="gap-3 my-4 flex flex-col">
            <Box className="flex gap-2">
              <IconBox
                icon={
                  hasDelivered ? (
                    <PiCheckBold color={theme.palette.secondary.main} />
                  ) : (
                    <PiClockCountdownThin color="black" />
                  )
                }
                color={
                  hasDelivered
                    ? theme.palette.secondary.light
                    : theme.palette.grey[50]
                }
                size={30}
                borderRadius="10px"
              />
              <Typography
                variant="body1"
                fontWeight={hasDelivered ? "bold" : ""}
              >
                Delivered
              </Typography>
            </Box>
            <Box className="flex gap-2">
              <IconBox
                icon={
                  hasPrepared ? (
                    <PiCheckBold color={theme.palette.secondary.main} />
                  ) : (
                    <PiClockCountdownThin color="black" />
                  )
                }
                color={
                  hasPrepared
                    ? theme.palette.secondary.light
                    : theme.palette.grey[50]
                }
                size={30}
                borderRadius="10px"
              />
              <Typography
                variant="body1"
                fontWeight={hasPrepared ? "bold" : ""}
              >
                On the way
              </Typography>
            </Box>
            <Box className="flex gap-2">
              <IconBox
                icon={
                  hasPrepared ? (
                    <PiCheckBold color={theme.palette.secondary.main} />
                  ) : (
                    <PiClockCountdownThin color="black" />
                  )
                }
                color={
                  hasPrepared
                    ? theme.palette.secondary.light
                    : theme.palette.grey[50]
                }
                size={30}
                borderRadius="10px"
              />
              <Typography
                variant="body1"
                fontWeight={hasPrepared ? "bold" : ""}
              >
                Food is ready
              </Typography>
            </Box>
            <Box className="flex gap-2">
              <IconBox
                icon={
                  hasConfirmed ? (
                    <PiCheckBold color={theme.palette.secondary.main} />
                  ) : (
                    <PiClockCountdownThin color="black" />
                  )
                }
                color={
                  hasConfirmed
                    ? theme.palette.secondary.light
                    : theme.palette.grey[50]
                }
                size={30}
                borderRadius="10px"
              />
              <Typography
                variant="body1"
                fontWeight={hasConfirmed ? "bold" : ""}
              >
                Order Accepted
              </Typography>
            </Box>
          </Box>
          <Box className="w-full flex justify-between gap-3">
            <IconButton
              sx={{
                width: "25%",
                borderRadius: "12px",
                bgcolor: theme.palette.primary.light,
              }}
            >
              <PiChatBold color={theme.palette.primary.main} />
            </IconButton>
            <Button sx={{ borderRadius: "12px" }} variant="contained" fullWidth>
              <Typography variant="h6">
                Call to{" "}
                <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                  (Edward)
                </span>
              </Typography>
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
