import "./App.css";
import Popup from "./Components/Popup";
import { useState } from "react";
function App() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setbuttonPopup(true)}>
        View Profile
      </button>
      <Popup trigger={buttonPopup}>
        <Header />
        <Details />
        <hr color="#F5F5F5"></hr>
        <div className="bold">Past Diagnosis</div>

        <Diagnosis />
        <div className="bold">Medicine Prescribed</div>
        <Medicine />
      </Popup>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div className="blank"></div>
      <div className="profile">
        <img src="./Image/profile.svg" alt="" />
      </div>
      <div className="patient">
        <div className="center name col1">Patients Name</div>
        <div className="center col1">Gender</div>
        <div className="center col2">Patient ID</div>
      </div>
      <div className="weight col1">
        <div className="flexy">
          <div className="flexy2 ">
            <img src="./Image/weight.svg" alt="" />
            <div>Weight</div>
          </div>
          <div> 80 Kg</div>
        </div>
        <div className="flexy">
          <div className="flexy2">
            <img src="./Image/blood group.svg" alt="" />
            <div>Blood Group</div>
          </div>
          <div> O+ </div>
        </div>
        <div className="flexy">
          <div className="flexy2">
            <img src="./Image/height.svg" alt="" />
            <div>Height</div>
          </div>
          <div> 181 cm</div>
        </div>
        <div className="flexy">
          <div className="flexy2">
            <img src="./Image/age.svg" alt="" />
            <div>Age</div>
          </div>
          <div> 55 Years</div>
        </div>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <div className="details">
      <div className="contact border row1">
        <div className="bold1">Contact Details</div>
        <div className="container col1">
          <img src="./Image/phone.svg" alt="" />
          <div>993355678</div>
        </div>
        <div className="container col1">
          <img src="./Image/mail.svg" alt="" />
          <div>XYZ@gmail.com</div>
        </div>
        <div className="container col1">
          <img src="./Image/Home.svg" alt="" />
          <div>
            351-T, Janakpuri,<br></br> New Delhi-110015
          </div>
        </div>
      </div>

      <div className="contact border row2">
        <div className="bold1">Upcomming Appointment</div>

        <div className="container1 col1">
          <img src="./Image/calendar.png" alt="" />
          <div>
            12th July 2021,<br></br> 10:00 AM
          </div>
        </div>
      </div>
    </div>
  );
};

const Diagnosis = () => {
  return (
    <div className="diagnosis">
      <div>
        <div className="col2 coleft">Condition</div>
        <div className="coleft col1">Clinical OCD</div>
        <div className=" coleft col1">Hypertension</div>
      </div>
      <div>
        <div className="col2">Diagnosed</div>
        <div className="col1">3 Months ago</div>
        <div className="col1">2 Months ago</div>
      </div>
      <div>
        <div className="col2">Doctor Consulted</div>
        <div className="col1">Dr. Rachel Green</div>
        <div className="col1">Dr. Patric Kowaski</div>
      </div>
    </div>
  );
};

const Medicine = () => {
  return (
    <div className="medicine">
      <div>
        <div className="col2 coleft">Name</div>
        <div className="coleft col1">Flunil 20mg</div>
        <div className="coleft col1">Elilam 250</div>
      </div>
      <div>
        <div className="col2">Dose</div>
        <div className="col1">1 tab</div>
        <div className="col1">1 tab</div>
      </div>
      <div>
        <div className="col2">Instruction</div>
        <div className="col1">After breakfast</div>
        <div className="col1">Before sleeping</div>
      </div>
      <div>
        <div className="col2">Period</div>
        <div className="col1">1 month</div>
        <div className="col1">2 months</div>
      </div>
    </div>
  );
};

export default App;
