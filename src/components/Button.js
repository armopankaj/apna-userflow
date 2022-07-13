import React from "react";
import { useGlobalContext } from "../context";
const Button = () => {
  const { setPage, isDisabled } = useGlobalContext();
  // let text

  // if (page === 1) { text = "Continue" } else { text = "Continue to post a job" }

  return (
    <>
      <button
        className="footer-button"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        disabled={isDisabled}
      >
        <span>Continue</span>
      </button>
    </>
  );
};

export default Button;
