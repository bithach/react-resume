import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
