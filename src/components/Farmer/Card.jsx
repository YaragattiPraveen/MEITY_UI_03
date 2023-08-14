const Card = ({ item }) => {
  return (
    <>
      <div className="my-1 p-4 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
        <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
          <img alt="Placeholder"
            className="block h-[280px] object-cover w-full"
            src={item?.url}
          />
          <header className="flex items-center justify-center leading-tight p-2 md:p-4">
            <h1 className="text-lg font-semibold uppercase ">
              {item?.title}
            </h1>
          </header>
          <footer className="flex items-center justify-between leading-none px-2 md:px-4">
            <p className="text-base text-bg__color font-bold">Market Price</p>
            <p className="text-base text-bg__color font-bold">FPO Price</p>
          </footer>
          <footer className="flex items-center justify-between leading-none pb-5 px-2 md:px-4">
            <p className="text-base">₹ 520</p>
            <p className="text-base">₹ 459</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
