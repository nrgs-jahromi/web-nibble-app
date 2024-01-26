import * as React from "react";
import { useEffect, ReactNode, useMemo } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { GoHome, GoBookmark, GoListUnordered } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import theme from "../../theme";
import image from "../../assets/Icon.png";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router";
import Advertize from "../brand/Advertize";
import { useUserInfo } from "../../api/profile/profileInformation";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { enqueueSnackbar } from "notistack";
import { useUserLogout } from "../../api/auth/logout";

const drawerWidth = 304;

type NavbarItem = {
  id: string;
  label: string;
  path: string;
  icon: ReactNode;
};
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRadius: "0 24px 24px 0",
  borderRight: "none",
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(0, 2),

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: "0 24px 24px 0",
  borderRight: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  padding: "0",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 3.5),
    width: "112px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavigation() {
  const [active, setActive] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const userId = parseInt(localStorage.getItem("userId") || "0", 10);
  const { data: userInfo, isSuccess: isUserInfoSuccess } = useUserInfo({
    body: { id: userId },
  });

  const navbarItems: NavbarItem[] = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        path: "home",
        icon: <GoHome />,
      },
      // {
      //   id: "explore",
      //   label: "Explore",
      //   path: "#",
      //   icon: <BiCategory />,
      // },
      {
        id: "favorites",
        label: "Favorites",
        path: "favorites",
        icon: <GoBookmark />,
      },
      {
        id: "orders",
        label: "Orders",
        path: "orders",
        icon: <GoListUnordered />,
      },
      {
        id: "settings",
        label: "Settings",
        path: "settings",
        icon: <IoSettingsOutline />,
      },
    ],
    []
  );
  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const lastPathPart = pathParts[pathParts.length - 1];

    const matchingNavbarItem = navbarItems.find(
      (item) => lastPathPart === item.id
    );
    if (matchingNavbarItem) {
      setActive(matchingNavbarItem.id);
    }
  }, [navbarItems]);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const { mutate: logout, isSuccess: logoutSuccessfully } = useUserLogout();

  const handleLogout = () => {
    logout();
  };
  const handleLogIn = () => {
    navigate("/login/");
  };
  useEffect(() => {
    if (logoutSuccessfully) {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("userId");
      navigate("/login/");
    }
  }, [logoutSuccessfully]);

  useEffect(() => {
    if (isLargeScreen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isLargeScreen]);
  const navigateHandler = (item: NavbarItem) => {
    setActive(item.id);
    navigate(item.path);
  };
  return (
    <Box>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box onClick={handleDrawerClose} className="flex flex-row gap-2">
            <img src={image} width={40} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ opacity: open ? 1 : 0 }}
            >
              Nibble
            </Typography>
          </Box>
        </DrawerHeader>
        <List>
          {navbarItems.map((item) => (
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigateHandler(item)}
                sx={{
                  minHeight: 56,
                  borderRadius: "12px",
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: active === item.id ? theme.palette.primary.main : "",
                  ":hover": {
                    bgcolor: theme.palette.primary.light, // Change to the desired hover color
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    fontSize: 20,
                    color: active === item.id ? "white" : "",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color:
                      active === item.id ? "white" : theme.palette.common.black,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box className="w-full flex justify-center mt-3">
          {open && <Advertize />}
        </Box>
        {userId !== 0 ? (
          <Box
            // onClick={handleDrawerClose}
            className="flex w-full flex-row gap-2 absolute bottom-9"
          >
            <img src={profile} />
            <Box>
              <Typography variant="body1" sx={{ opacity: open ? 1 : 0 }}>
                {userInfo?.full_name}
              </Typography>
              <Typography variant="caption" sx={{ opacity: open ? 1 : 0 }}>
                {userInfo?.email}
              </Typography>
            </Box>
            <IconButton onClick={handleLogout}>
              <FiLogOut />
            </IconButton>
          </Box>
        ) : (
          <Box
            onClick={handleLogIn}
            // onClick={handleDrawerClose}
            className="flex w-full flex-row gap-2 absolute bottom-9 items-center"
          >
            <IconButton>
              <FiLogIn />
            </IconButton>
            <Box>
              <Typography variant="body1" sx={{ opacity: open ? 1 : 0 }}>
                Login
              </Typography>
            </Box>
          </Box>
        )}
      </Drawer>
    </Box>
  );
}
