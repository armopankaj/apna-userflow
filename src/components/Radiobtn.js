import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Radiobtn = ({ obj, handleClick }) => {
  const {
    selected,
    setCompanyName,
    setClientsName,
    setConsultancyName,
    setWebsite,
  } = useGlobalContext();

  useEffect(() => {
    // id is changed i.e radio button is changed the previous fields are
    //made empty
    if (selected === 1) {
      setClientsName("");
      setConsultancyName("");
      setWebsite("");
    } else if (selected === 2) {
      setCompanyName("");
      setWebsite("");
    }
  }, [selected]);

  return (
    <div className={`card${selected === obj.id ? "active" : ""}`}>
      <div className="card-content">
        <label className="big">
          <input
            type="radio"
            name="hiring"
            id={obj.title}
            onChange={() => handleClick(obj)}
            checked={obj.id === selected}
            key={obj.id}
          />
          <div className="card-detail">
            <div className="logo-detail">
              <img src={obj.logo} alt="logo" id={obj.title} />
              <p>{obj.title}</p>
            </div>

            <p className="logo-subtitle">{obj.subtitle}</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Radiobtn;
