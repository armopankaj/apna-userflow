import React from "react";
import { useGlobalContext } from "../context";
import { sizelist } from "../util/data";
const Footercomp = () => {
  const { employeeNum, setEmployeeNum } = useGlobalContext();

  return (
    <div className="footer-comp">
      <label>Number of employees in your company</label>
      <div className="sizebuttons">
        {sizelist.map((ele) => {
          return (
            <button
              key={ele.id}
              value={ele.size}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // console.log('this is the item', ele.size)
                setEmployeeNum(e.target.value);
              }}
              className={`button${employeeNum === ele.size ? "active" : ""}`}
            >
              {ele.size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Footercomp;
