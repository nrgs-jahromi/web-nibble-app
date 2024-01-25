import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useNavigate } from "react-router";
import { Logout } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { queryClient } from "../../main";

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function OrderDetailDrawer({
  open,
  onClose,
}: ProfileDrawerProps) {
  return (
    <Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { width: "30%", borderRadius: "24px 0px 0px 24px" },
        }}
      ></Drawer>
    </Box>
  );
}
