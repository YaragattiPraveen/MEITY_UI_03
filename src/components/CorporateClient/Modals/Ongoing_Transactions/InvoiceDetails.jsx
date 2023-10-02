import Image_modal from "../../../Farmer/Modals/Image_modal";
import useModal from "../../../hooks/useModal";

const InvoiceDetails = () => {
  const { modal, closeModal, updateModal } = useModal();
  return (
    <>
      <div className="relative px-6 py-3 flex-auto">
        <h2 className="text-bg__color font-Roboto text-xl font-semibold">
          Invoice Details
        </h2>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              FPO Id
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="64817a37c31ad03a451a9f4c"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              FPO Name
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="Fpo1"
              disabled 
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              FPO Phone Number
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="number"
              placeholder="8485257415"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              Bid Amount
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="100"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              Invoice Number
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="145224512"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              Invoice Date
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="08/06/2023"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
              Invoice
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <button
              onClick={() => updateModal("InvoiceDetails")}
              className="bg-bg__color w-full text-center block text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
        </div>
      </div>
      {modal.state === "InvoiceDetails" && (
        <Image_modal         title={"Invoice Details"} closemodel={closeModal} />
      )}
    </>
  );
};

export default InvoiceDetails;
