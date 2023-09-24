import React, { useState } from "react";
import FpoInformation from "../Tables/FpoInformation";
import FpoList from "../Tables/FpoList";

const FPO_Profile = () => {
  const [fpoInfo, setFpoInfo] = useState(false);
  return (
    <>
      {fpoInfo ? (
        <FpoInformation setFpoInfo={setFpoInfo} />
      ) : (
        <FpoList setFpoInfo={setFpoInfo} />
      )}
    </>
  );
};

export default FPO_Profile;
