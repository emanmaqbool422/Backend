import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import StartLearning from "./pages/StartLearning";
import Admin from "./pages/Admin";
import Events from "./pages/Events";
import LoginPage from "./pages/LoginPage";
import AddEvent from "./pages/AddEvent";
import SubmitForm from "./pages/SubmitForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/startlearning" element={<StartLearning />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addevent" element={<AddEvent/>} />
          <Route path="/submitform" element={<SubmitForm/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
