import "./sass/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Candidate from "./pages/Candidate.js";
import Company from "./pages/Company.js";
import Details from "./pages/Details.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="company" element={<Company />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
