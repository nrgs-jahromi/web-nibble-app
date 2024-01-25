import { Box, Divider, ListItem, Typography } from "@mui/material";
import {
  MdPersonOutline,
  MdBookmarkBorder,
  MdMailOutline,
  MdOutlineAccountBalanceWallet,
  MdCreditCard,
  MdOutlineContactSupport,
  MdOutlinePersonAddAlt,
  MdMoney,
} from "react-icons/md";
import theme from "../../theme";
import SettingItem from "./SettingItem";
import { useState } from "react";
import PersonalInfoModal from "./PersonalInfoModal";
import AddressModal from "./AddressModal";

const SettingPage = () => {
  const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);
  const [userAddressModalOpen, setUserAddressModalOpen] = useState(false);

  const userInfoHandler = () => {
    setUserInfoModalOpen(true);
  };
  const userAddressModalHandler = () => {
    setUserAddressModalOpen(true);
  };
  return (
    <Box
      className="w-full flex flex-col overflow-auto"
      maxHeight={"calc(100vh - 90px)"}
    >
      <Typography variant="h5" fontWeight="bold">
        Settings
      </Typography>

      <Box>
        <Typography
          variant="body2"
          fontWeight={"light"}
          marginBottom={1}
          marginTop={2}
        >
          General
        </Typography>
        <SettingItem
          icon={MdPersonOutline}
          text="Personal information"
          onClick={userInfoHandler}
        />
        <Divider sx={{ marginBottom: "12px" }} />
        <SettingItem
          icon={MdBookmarkBorder}
          text="Saved addresses"
          color={theme.palette.secondary.main}
          onClick={userAddressModalHandler}
        />
        <Divider sx={{ marginBottom: "12px" }} />
        <SettingItem
          icon={MdMailOutline}
          text="Marketing preferences"
          color={theme.palette.warning.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
      </Box>

      <Box>
        <Typography
          variant="body2"
          fontWeight={"light"}
          marginBottom={1}
          marginTop={2}
        >
          Payments
        </Typography>
        <SettingItem
          icon={MdOutlineAccountBalanceWallet}
          text="Payment methods"
          color={theme.palette.primary.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
        <SettingItem
          icon={MdCreditCard}
          text="My cards"
          color={theme.palette.secondary.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
      </Box>

      <Box>
        <Typography
          variant="body2"
          fontWeight={"light"}
          marginBottom={1}
          marginTop={2}
        >
          Other
        </Typography>
        <SettingItem
          icon={MdOutlineContactSupport}
          text="Support"
          color={theme.palette.primary.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
        <SettingItem
          icon={MdOutlinePersonAddAlt}
          text="Invite a friend"
          color={theme.palette.secondary.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
        <SettingItem
          icon={MdMoney}
          text="Discounts"
          color={theme.palette.warning.main}
        />
        <Divider sx={{ marginBottom: "12px" }} />
      </Box>

      <ListItem />
      <PersonalInfoModal
        isOpen={userInfoModalOpen}
        onClose={() => setUserInfoModalOpen(false)}
      />
      <AddressModal
        isOpen={userAddressModalOpen}
        onClose={() => setUserAddressModalOpen(false)}
      />
    </Box>
  );
};

export default SettingPage;
