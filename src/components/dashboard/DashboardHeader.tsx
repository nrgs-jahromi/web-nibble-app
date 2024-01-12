import { Box, InputBase, Typography, useMediaQuery } from "@mui/material";
import { TbCurrentLocation } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { HiMiniTicket } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import { IoFilter, IoMenu } from "react-icons/io5";
import IconBox from "../baseComponents/IconBox";
import { BiSearchAlt2 } from "react-icons/bi";
import theme from "../../theme";
import { ReactNode, useState } from "react";
import { MdUnfoldMore } from "react-icons/md";

type Filter = {
  text: string;
  icon: ReactNode;
};
const DashboardHeadeer = () => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleCartClick = () => {
    setCartDrawerOpen(true);
  };
  const closeCartDrawer = () => {
    setCartDrawerOpen(false);
  };
  const filters: Filter[] = [
    {
      icon: (
        <TbCurrentLocation size="24px" color={theme.palette.primary.main} />
      ),
      text: "San Francisco, California",
    },
    {
      icon: <IoBagHandle size="24px" color={theme.palette.secondary.main} />,
      text: "Pick up",
    },
    {
      icon: <HiMiniTicket size="24px" color={theme.palette.warning.main} />,
      text: "Best deals",
    },
  ];
  return (
    <Box className="w-full h-10 flex flex-rows justify-between gap-8">
      {isMdScreen ? (
        <Box className="flex flex-row justify-between w-1/2">
          {filters.map((item, index) => (
            <Box key={index} className="flex flex-row items-center gap-2">
              {item.icon}
              <Typography variant="body2">{item.text}</Typography>
              <MdUnfoldMore size="16px" />
            </Box>
          ))}
        </Box>
      ) : (
        <IconBox
          icon={<IoMenu />}
          color={theme.palette.primary.main}
          size={48}
          borderRadius={"10px"}
        />
      )}
      <Box className="flex flex-row gap-4  lg:w-1/2">
        <Box
          sx={{
            p: "2px 12px",
            bgcolor: "#f7f7f7",
            display: "flex",
            alignItems: "center",
            justifyContent: isMdScreen ? "center" : "flex-start",
            width: isMdScreen ? "100%" : "48px",
            height: "48px",
            borderRadius: "10px",
          }}
        >
          <BiSearchAlt2 size="24px" />
          {isMdScreen && (
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for anything…"
            />
          )}
        </Box>
        {isMdScreen && (
          <IconBox
            icon={<IoFilter />}
            color={theme.palette.primary.main}
            size={48}
            borderRadius={"10px"}
          />
        )}
        <Box onClick={handleCartClick}>
          <IconBox
            icon={<IoMdCart />}
            color={theme.palette.secondary.main}
            size={48}
            borderRadius={"10px"}
          />
        </Box>
      </Box>
      {/* <CartDrawer open={isCartDrawerOpen} onClose={closeCartDrawer} /> */}
    </Box>
  );
};
export default DashboardHeadeer;
