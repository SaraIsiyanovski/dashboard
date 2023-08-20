import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContextComponent";

export const Checkout = () => {
  const { classToBe2 } = useContext(ThemeContext);

  return (
    <div className="form-div">
      <form className={classToBe2}>
        <div>
          <label>Enter your name</label>
          <input className="input-check" type="text" id="name" required />
        </div>
        <div>
          <label>Enter your email</label>
          <input className="input-check" type="email" id="email" required />
        </div>
        <div>
          <h4
            className="shipping
          "
          >
            Shipping details
          </h4>
          <label>Street adress</label>
          <input className="input-check" type="text" id="adress" required />
        </div>
        <div className="zip">
          <div>
            <label>City</label>
            <inpu className="input-check" t type="text" id="city" required />
          </div>
          <div>
            <label>Zip code</label>
            <input className="input-check" type="number" id="zip" required />
          </div>
        </div>
        <div>
          <label>Country</label>
          <input className="input-check" type="text" id="coutry" required />
        </div>
        <button className="btn btn-c">Place order</button>
      </form>
    </div>
  );
};
