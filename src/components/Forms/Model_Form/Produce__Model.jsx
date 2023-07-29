const Produce__Model = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Date
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="date"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Crop Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Seed - 1"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Variety Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Variety - 1"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Grade
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="C"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Quantity
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Quantity"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Upload Image
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="file"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            htmlFor="message"
            className="block mb-2 font-Roboto font-medium text-silver__color"
          >
            Remarks
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1"></div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full outline-hover__color text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Leave a comment..."
          defaultValue={""}
        />
      </div>
    </>
  );
};

export default Produce__Model;
