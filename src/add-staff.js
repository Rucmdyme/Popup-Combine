import "./add-staff.css";
import Popup from "./Components/add-staff-popup";
import { useState } from "react";
function AddStaff() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setbuttonPopup(true)}>
        Add Staff
      </button>
      <Popup trigger={buttonPopup}>
        <div className="blank"></div>
        <div className="staff">Add a Staff</div>
        <Main />
      </Popup>
    </div>
  );
}

const Main = () => {
  return (
    <div className="form">
      <form>
        <input type="text" value={"Name"}></input>
        <select name="gender" className="gender">
          <option value="none" selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <input type="email" value={"E-mail"}></input>
        <input type="text" value={"Contact No."}></input>
        <input type="text" value={"Address"}></input>
      </form>
      <button className="btn1">Send for Verification</button>
    </div>
  );
};
export default AddStaff;
