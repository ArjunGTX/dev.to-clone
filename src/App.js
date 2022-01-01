import "./App.css";
import Header from "./components/Header/Header";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Skeleton from "./components/Skeleton/Skeleton";

function App() {
  const LazyMain = React.lazy(() => import("./components/Main/Main"));
  return (
    <>
      <Header />
      <div className="container">
        <Left />
        <Suspense
          fallback={
            <>
              <Skeleton cover />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          }
        >
          <Router>
            <Routes>
              <Route path="/" element={<LazyMain page="relevant" />} />
              <Route path="/latest" element={<LazyMain page="latest" />} />
              <Route path="/top" element={<LazyMain page="top" />} />
            </Routes>
          </Router>
        </Suspense>
        <Right />
      </div>
    </>
  );
}

export default App;
