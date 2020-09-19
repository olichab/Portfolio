import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";

const DelayedFallback = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{show && <Spinner />}</>;
};
export default DelayedFallback;
