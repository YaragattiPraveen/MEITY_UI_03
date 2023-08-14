const Card = () => {
  return (
    <div className="my-1 px-2 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
      <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-agriculture-company-landing-page-template_23-2149730129.jpg?w=1380&t=st=1691989668~exp=1691990268~hmac=5439f8b8888e5fb082ec1fdfb7db45c8f1403fb91f71d4570e5eda9ad283f023"
          alt=""
          className="rounded-t-lg h-60 w-full object-cover"
        />
        {/*Card Header*/}
        <header className=" text-xl font-extrabold p-4">Title of the Announcements</header>
        <div>
          <p className="text-gray-500 px-4">
            Farming activity means the cultivation of farmland for the production of crops, fruits, vegetables, ornamental and flowering plants, and the utilization of farmland for the production of dairy, livestock, poultry, and all other forms of agricultural products having a domestic or foreign market..
          </p>
        </div>
        {/*Card Footer*/}
        <footer className="text-right py-3 px-8 text-gray-500">
          <button className="text-white uppercase text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color">
            Read More
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Card;
