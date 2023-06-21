import { Link, Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs";
import Books from "./components/Books";

const App = () => {
  return (
    <div className="App">
      <h1>کتابخانه من</h1>
      {/*About - Books*/}    
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem"}}>
        <Link to="/about"> درباره ما</Link>
        {" "}
        <Link to="/books">کتاب ها</Link>
      </nav>
      <Outlet  />
    </div>
  );
};

export default App;
