import React, { useState } from "react";
import { MultiSelect, MultiSelectProps } from "@uc-react-ui/multiselect";
import states from "../../Utils/Const";

const Form2 = () => {
  const [value, setValue] = useState(["desktop"]);

  const options = states.map((state) => ({ label: state }));

  const props: MultiSelectProps = {
    name: "State",
    size: "small",
    optionList: options,
    placeholder: "Select your State",
    value: value,
    valueChange: setValue,
  };

  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            State{" "}
          </label>
          <MultiSelect {...props} />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">City </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Pincode
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Email
          </label>
          <input
            type="email"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Select FPO
          </label>
          <select
            className="appearance-none border font-Roboto rounded w-full py-2 px-3 text-grey-darker"
            required={true}
          >
            <option className="font-Roboto" value="murhu">
              Select your FPO
            </option>
            <option className="font-Roboto" value="murhu">
              FPO - 1
            </option>
            <option className="font-Roboto" value="churchu">
              FPO - 2
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Form2;
