import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const ulisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      ulisten();
    };
  }, []);
  return null;
}

export default withRouter(ScrollToTop);
