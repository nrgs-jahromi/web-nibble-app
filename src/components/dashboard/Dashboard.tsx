import { Box } from "@mui/material";
import SideNavigation from "./SideNavigation";
import DashboardHeadeer from "./DashboardHeader";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <Box className="flex h-screen w-screen">
      <SideNavigation />
      <Box className="flex flex-col w-full h-full p-5">
        <DashboardHeadeer />
        <Box component="main" sx={{ flexGrow: 1, pt: "20px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
