import { NavLink } from "react-router";
import CustomButton from "./CustomButton";

export const Navbar = () => {
  return (
    <nav className="px-8 py-5 border-b border-[#E5E7EB] flex justify-between items-center">
      <div>
        <img src="/logo.png" alt="App logo" />
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/search" end>
          {({ isActive }) => (
            <CustomButton variant={isActive ? "primary" : "secondary"}>
              Home
            </CustomButton>
          )}
        </NavLink>

        <NavLink to="/collections" end>
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
