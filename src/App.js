import React from "react";
import Appointment from "./appointment-profile";
import AddStaff from "./add-staff";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Appointment />} />
          <Route exact path="/AddStaff" element={<AddStaff />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
