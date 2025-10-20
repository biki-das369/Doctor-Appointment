import "./App.css";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/bookingpage/:id" element=<BookingPage /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
