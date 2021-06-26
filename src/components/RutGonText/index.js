import React, { useState } from "react";

export default function RutGonText({ text, len, moreIcon, lessIcon }) {
  const [rutGon, setRutGon] = useState(true);
  return (
    <div>
      {rutGon ? text.toString().slice(0, len) : text}
      {len < text.toString().length ? (
        rutGon ? (
          <span
            onClick={() => {
              setRutGon(!rutGon);
            }}
          >
            {moreIcon}
          </span>
        ) : (
          <span
            onClick={() => {
              setRutGon(!rutGon);
            }}
          >
            {lessIcon}
          </span>
        )
      ) : null}
    </div>
  );
}
