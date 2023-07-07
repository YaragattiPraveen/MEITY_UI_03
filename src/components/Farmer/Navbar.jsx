import { useContext } from "react";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../../Context/context";

const Navbar = () => {
  const { setToggleNav } = useContext(AppContext);
  return (
    <div className="bg-nav__bg__color shadow-md py-4 rounded-b-xl lg:px-10 container w-full mx-auto">
      <div className="flex items-center justify-between px-2 md:px-8">
        <div>
          <div
            onClick={() => {
              setToggleNav(true);
            }}
            className="lg:hidden block"
          >
            <MenuIcon
              style={{ fontSize: "30" }}
              className="text-silver__color"
            />
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="bg-bg__color font-Roboto py-1.5 px-3 rounded-full text-white__color">
            S
          </h1>
          <div className="justify-center px-4 flex-col hidden md:flex">
            <p className="font-semibold text-silver__color font-Roboto">
              Shreyansh Nema
            </p>
            <span className="text-[14px] font-medium text-silver__color font-Roboto">
              Admin
            </span>
          </div>
          <div className="d-none md:flex">
            <NotificationsActiveRoundedIcon
              style={{ fontSize: "30" }}
              className="text-silver__color  font-Roboto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
