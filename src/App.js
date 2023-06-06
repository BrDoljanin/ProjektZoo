import "./styles.css";
import Navigacija from "./Components/Navigacija";
import Header from "./Components/Header";
import Vrijeme from "./Components/Vrijeme";
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Zivotinja from "./Components/Zivotinja";

export default function App() {
  return (
    <div className="App">
      <Navigacija />
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/vrijeme" element={<Vrijeme></Vrijeme>}></Route>
        <Route path="/zivotinja" element={<Zivotinja></Zivotinja>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
