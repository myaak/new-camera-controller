import { Routes, Route } from "react-router-dom";
import NavHeader from "../Header/NavHeader";
import { NavHeaderRoutes } from "./routes";

interface NavHeaderRouterProps {
  showMenu: () => void;
}

const NavHeaderRouter: React.FC<NavHeaderRouterProps> = ({ showMenu }) => {
  return (
    <Routes>
      {NavHeaderRoutes.map((item: any, index: number) => (
        <Route key={index} path={item.path} element={<NavHeader title={item.title} showMenu={showMenu} />} />
      ))}
    </Routes>
  );
};

export default NavHeaderRouter;
