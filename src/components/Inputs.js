import React from "react";
import "./Inputs.css";

function Inputs(props) {
  const incrementPage = () => {
    props.setNumPage((prev) => Number(prev) + 1);
    //(prev) => prev < 22 ? prev+ 1 : prev)
  };
  const decrementPage = () => {
    props.setNumPage((prev) => Number(prev) - 1);
    //(prev) => prev >1 ? prev- 1 : prev
  };

  const incrementLan = () => {
    props.setNumLanguages((pre) => (pre < 5 ? pre + 1 : pre));
  };
  const decrementLan = () => {
    props.setNumLanguages((pre) => (pre > 0 ? pre - 1 : pre));
  };

  const checkRegHandler = (e) => {
    const re = /^[0-9\b+$]/;
    if (re.test(e.target.value)) {
      props.setNumPage(e.target.value);
    }
  };

  return (
    <div>
      <label className="pagesLine">
        <p> How many pages:</p>
        <button type="button" onClick={incrementPage}>
          ➕
        </button>
        <input
          type="text"
          value={props.numPage}
          maxLength="2"
          onChange={checkRegHandler}
        />
        <button type="button" onClick={decrementPage}>
          ➖
        </button>
      </label>

      <label className="pagesLine">
        <p> How many languages:</p>
        <button type="button" onClick={incrementLan}>
          ➕
        </button>
        <input type="text" value={props.numLanguages} readOnly />
        <button type="button" onClick={decrementLan}>
          ➖
        </button>
      </label>
    </div>
  );
}
export default Inputs;
