import React from "react";

import Head from "./Head";
import ApnaLogo from "../util/ApnaLogo";
import Formcomp from "./Formcomp";
import { useGlobalContext } from "../context";
import Button from "./Button";
import Backbtn from "../util/Backbtn";

const Form = () => {
  const { page } = useGlobalContext();

  return (
    <>
      <div className="main-container">
        {page === 2 && <Backbtn />}
        <div className="header-container">
          <ApnaLogo />
          <div className="header-txt">
            <Head />
          </div>
        </div>
        <div className="body">
          <Formcomp />
        </div>

        {page <= 2 && <Button />}
      </div>
    </>
  );
};

export default Form;
