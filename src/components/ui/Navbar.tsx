import { NavLink } from "react-router";
import CustomButton from "./CustomButton";
import { ROUTES } from "../../routes/routes.enum";

export const Navbar = () => {
  return (
    <nav className="px-8 py-5 border-b border-[#E5E7EB] flex justify-between items-center">
      <div>
        <img src="/logo.png" alt="App logo" />
      </div>
      <div className="flex items-center gap-4">
        <NavLink to={ROUTES.search} end>
          {({ isActive }) => (
            <CustomButton variant={isActive ? "primary" : "secondary"}>
              Home
            </CustomButton>
          )}
        </NavLink>

        <NavLink to={ROUTES.collections} end>
          {({ isActive }) => (
            <CustomButton variant={isActive ? "primary" : "secondary"}>
              Collections
            </CustomButton>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
