import React from "react";
import { useGlobalContext } from "../context";
import Radiobtn from "./Radiobtn";
import { data } from "../util/data";

const Conditional = () => {
  const { setSelected } = useGlobalContext();

  const handleClick = (obj) => {
    setSelected(obj.id);
  };
  return (
    <div className="conditional">
      {data.map((obj) => {
        return <Radiobtn key={obj.id} obj={obj} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Conditional;
