import { Link } from "react-router-dom";

const Form1 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="first_name"
            type="text"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="last_name"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            type="password"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="Confirm Password"
          >
            Confirm Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="Confirm Password"
            type="password"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="first_name"
          >
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="first_name"
            type="text"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="father_name"
          >
            Father Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="father_name"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2" htmlFor="date">
            Date of Birth
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="date"
            type="date"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="appearance-none border rounded w-full bg-slate-100 py-2 px-3 text-grey-darker"
            id="age"
            type="age"
            disabled
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <div>
            <label
              className="block text-grey-darker font-Roboto text-black__color mb-2"
              htmlFor="Gender"
            >
              Gender
            </label>

            <div className="flex justify-between">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className=" text-grey-darker font-Roboto text-black__color mb-2 form-check-label">Male</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className=" text-grey-darker font-Roboto text-black__color mb-2 form-check-label">Female</label>
              </div>
            </div>
          </div>
        </div>

      </div>
      <p className="text-center my-4">
        <span
          href="#"
          className="text-black__color no-underline text-[15px] font-Roboto hover:text-grey-darker"
        >
          I already have an account?{" "}
          <Link
            to="/"
            className="text-bg__color hover:text-indigo-600 text-base font-Roboto"
          >
            Sign In
          </Link>
        </span>
      </p>
    </>
  );
};

export default Form1;
