import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

const FPO = () => {
  const [page, setPage] = useState(0);

  function DisplayForm() {
    if (page == 0) {
      return <Form1 />;
    } else if (page == 1) {
      return <Form2 />;
    } else if (page == 2) {
      return <Form3 />
    } else if (page == 3) {
      return <Form4 />
    }
  }
  return (
    <div className="py-4 px-8">
      {DisplayForm()}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className={`${page === 0 ? "bg-silver__color" : "bg-hover__color"} py-2 w-[100px] hover:bg-bg__color
                    transition duration-150 ease-in text-white px-4`}
        >
          Back
        </button>
        {page == 3 ? (
          <button
            className="bg-hover__color py-2 w-[100px]
          hover:bg-bg__color
          transition duration-150 ease-in text-white px-4"
            type="submit"
          >
            Submit
          </button>
        ) : (
          <button
            disabled={page === 3}
            onClick={(prevPage) => setPage(page + 1)}
            className="bg-hover__color py-2 w-[100px]
            hover:bg-bg__color
            transition duration-150 ease-in text-white px-4"          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FPO;
