import useModal from "../../hooks/useModal";
import Navbar from "../Navbar";
import BookSlot from "./BookSlot";

const Equipment_List = () => {
  const { modal, closeModal, updateModal } = useModal();
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Available Equipments
      </h2>
      <div className="mx-auto">
        <div className="flex flex-wrap font-Roboto text-black__color">
          <div className="my-1 p-4 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
            <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
              <img
                alt="Placeholder"
                className="block h-[200px] object-cover w-full"
                src={
                  "https://www.ltfs.com/images/default-source/blog/large-image/03-ltfs_farm-loan_blog-8_benefits-of-borrowing-a-tractor-loan---689x600.jpg?sfvrsn=9e42f4fa_2"
                }
              />
              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className="text-lg font-semibold uppercase ">Tractor</h1>
              </header>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Rent Price/Hrs
                </p>
                <p className="text-base text-bg__color font-bold">
                  Available Date
                </p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">₹ 300</p>
                <p className="text-base">27/09/2023</p>
              </footer>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Available Slot
                </p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">1:30 PM to 4:30 PM</p>
              </footer>
              <div className="pb-5 px-2 md:px-4">
                <button
                  onClick={() => updateModal("ShowBookSlot")}
                  className="bg-bg__color text-white__color rounded-md p-1.5 w-full mx-auto"
                >
                  Book a Slot
                </button>
              </div>
            </div>
          </div>
          <div className="my-1 p-4 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
            <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
              <img
                alt="Placeholder"
                className="block h-[200px] object-cover w-full"
                src={
                  "https://www.bighaat.com/cdn/shop/products/BSyellowwithtapaslogo-2in1_160x.jpg?v=1689155526"
                }
              />
              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className="text-lg font-semibold uppercase text-center">
                  TAPAS 2 IN 1 BATTERY
                </h1>
              </header>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Rent Price/Hrs
                </p>
                <p className="text-base text-bg__color font-bold">
                  Available Date
                </p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">₹ 198</p>
                <p className="text-base">27/09/2023</p>
              </footer>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Available Slot
                </p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">1:30 PM to 4:30 PM</p>
              </footer>
              <div className="pb-5 px-2 md:px-4">
                <button
                  onClick={() => updateModal("ShowBookSlot")}
                  className="bg-bg__color text-white__color rounded-md p-1.5 w-full mx-auto"
                >
                  Book a Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal.state === "ShowBookSlot" && <BookSlot handleClose={closeModal} />}
    </div>
  );
};

export default Equipment_List;
