import React, { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

export default function IsLoading() {
  let [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading d-flex justify-content-center align-items-center" style={{height: "100vh", backgroundColor: "#cccccc80"}}>
      <HashLoader loading={loading} css={override} size={100} />
    </div>
  );
}
