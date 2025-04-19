import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const BodyRoutes = () => {
  return (
    <div className="bg-grey-500">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BodyRoutes;
