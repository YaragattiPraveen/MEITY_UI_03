const Card = () => {
  return (
    <>
      {/* <div
        className="max-w-sm mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
       transform hover:scale-105 transition duration-500"
      >
        <img
          className="rounded-t-lg"
          src="https://plus.unsplash.com/premium_photo-1667546569341-1136d35ab1fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <h2 className="text-lg text-center pt-3 font-Roboto font-bold text-white">
          Nylon Bag
        </h2>
        <div className="px-5 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="mb-1 text-base font-Roboto tracking-tight text-white">
              Market Price
            </p>
            <p className="text-white text-base font-Roboto">500</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-1 text-base font-Roboto tracking-tight text-white">
              FPO Price
            </p>
            <p className="text-white font-Roboto">450</p>
          </div>
        </div>
      </div> */}
      <div className="my-1 p-4 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
        <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
          <img alt="Placeholder"
            className="block h-[280px] object-cover w-full"
            src="https://img.freepik.com/premium-photo/peeled-pumpkin-seeds-isolated-top-view_88281-2100.jpg?w=996"
          />
          <header className="flex items-center justify-center leading-tight p-2 md:p-4">
            <h1 className="text-lg font-semibold uppercase ">
              Pumpkin Seeds
            </h1>
          </header>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-base">Seeds</p>
            <p className="text-base">Variant 1</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
