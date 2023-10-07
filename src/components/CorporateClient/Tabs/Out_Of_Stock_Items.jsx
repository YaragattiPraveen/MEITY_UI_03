import EditCard from "../../FPO/Corporate Customer/Modal/EditCard";
import useModal from "../../hooks/useModal";

const Out_Of_Stock_Items = ({ btnTitle }) => {
  const { modal, closeModal, updateModal } = useModal();
  return (
    <div className="container w-full mx-auto">
      <div className="mx-auto">
        <div className="flex flex-wrap font-Roboto text-black__color">
          <div className="my-1 p-4 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
            <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
              <img
                alt="Placeholder"
                className="block h-[200px] object-cover w-full"
                src={
                  "https://images.unsplash.com/photo-1586201375799-47cd24c3f595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
              />
              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className="text-lg font-semibold uppercase text-center">
                  Rai Seeds
                </h1>
              </header>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Crop Variety
                </p>
                <p className="text-base text-bg__color font-bold">Grade</p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">Seeds</p>
                <p className="text-base">NC 37</p>
              </footer>
              <footer className="flex items-center justify-between leading-none px-2 md:px-4">
                <p className="text-base text-bg__color font-bold">
                  Available Quantity
                </p>
                <p className="text-base text-bg__color font-bold">Price/Kg</p>
              </footer>
              <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
                <p className="text-base">47 Kg</p>
                <p className="text-base">49 Rs</p>
              </footer>
              <div className="pb-5 px-2 md:px-4">
                <button
                  onClick={() => {
                    if (btnTitle !== "Buy Now") {
                      updateModal("ShowEditModal");
                    }
                  }}
                  className="bg-bg__color text-white__color rounded-md p-1.5 w-full mx-auto"
                >
                  {btnTitle}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal.state === "ShowEditModal" && <EditCard title={"Edit"} handleClose={closeModal} />}
    </div>
  );
};

export default Out_Of_Stock_Items;
