import "./App.css";
import Header from "./components/Header/Header";
import Left from "./components/Left/Left";
import Main from "./components/Main/Main";
import Right from "./components/Right/Right";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Left />
        <Router>
          <Routes>
            <Route path="/" element={<Main page="relevant" />} />
            <Route path="/latest" element={<Main page="latest" />} />
            <Route path="/top" element={<Main page="top" />} />
          </Routes>
        </Router>
        <Right />
      </div>
    </>
  );
}

export default App;
