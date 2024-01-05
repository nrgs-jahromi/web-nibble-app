import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FC } from "react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Auth />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/app" element={<Dashboard />}>
          <Route path="entity/:entityId/instances" element={<InstanceListPage />} />
          <Route path="entity/:entityId/instances/owned" element={<OwnedInstanceListPage />} />
          <Route path="entity/:entityId/instances/create" element={<InstanceCreatePage />} />
          <Route path="entity/:entityId/instances/:instanceId" element={<InstanceDetailsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/app" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
