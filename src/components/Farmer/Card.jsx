const Card = () => {
  return (
    <>
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
