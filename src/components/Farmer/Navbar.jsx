import { useContext } from "react";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../../Context/context";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { setToggleNav } = useContext(AppContext);
  return (
    <div className="relative bg-nav__bg__color shadow-md pb-2 rounded-b-xl lg:px-10 container w-full mx-auto">
      <div className="flex items-center justify-between px-2 md:px-8">
        <div className="md:h-[80px] md:w-[240px] object-cover">
          <img
            className="mx-auto w-[100%] h-[100%]"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <div
            onClick={() => {
              setToggleNav(true);
            }}
            className="lg:hidden block absolute top-6 right-10"
          >
            <MenuIcon
              style={{ fontSize: "30" }}
              className="text-silver__color"
            />
          </div>
        </div>
        <div className="invisible lg:visible">
          <div className="flex items-center">
            <h1 className="bg-bg__color font-Roboto py-1 px-3 rounded-full text-white__color">
              S
            </h1>
            <div className="justify-center px-4 flex-col md:block">
              <p className="font-semibold text-silver__color font-Roboto">
                Shreyansh Nema
              </p>
              <span className="text-[14px] font-medium text-silver__color font-Roboto">
                Admin
              </span>
            </div>
            <div>
              <NotificationsActiveRoundedIcon
                style={{ fontSize: "30" }}
                className="text-silver__color  font-Roboto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
