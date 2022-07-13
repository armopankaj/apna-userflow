import React from "react";

const Inputcomp = ({ value, setValue, label, placeholder }) => {
  return (
    <>
      <div className="input-field">
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
      </div>
    </>
  );
};

export default Inputcomp;
