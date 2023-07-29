const Card = () => {
  return (
    <div className="my-1 px-2 w-full md:w-1/2 lg:my-4  lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 rounded-xl">
      <div className="overflow-hidden rounded-lg shadow-lg bg-box__bg__color">
        <img
          src="https://plus.unsplash.com/premium_photo-1667546569341-1136d35ab1fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="rounded-t-lg h-60 w-full object-cover"
        />
        {/*Card Header*/}
        <header className=" text-xl font-extrabold p-4">Title of the Announcements</header>
        <div>
          <p className="text-gray-500 px-4">
            Use card components to easily show blog posts, merchandise,
            functions, items and more.
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
