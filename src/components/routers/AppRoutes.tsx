import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import ForgotPass from "../auth/ForgotPass";
import Dashboard from "../dashboard/Dashboard";
import SettingPage from "../setting/SettingPage";
import OrderPage from "../order/OrderPage";
import HomePage from "../home/HomePage";
import FavoritePage from "../favorite/FavoritePage";
import RestaurantPage from "../restaurant/RestaurantPage";
import PassRecovery from "../auth/PassRecovery";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passrecovery/" element={<ForgotPass />} />
        <Route path="/passrecovery/setnew" element={<PassRecovery />} />

        <Route path="/*" element={<Dashboard />}>
          <Route path="settings" element={<SettingPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
