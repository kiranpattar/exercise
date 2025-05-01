// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import AuthHOC from "./pages/AuthHOC";




function App() {
  return (
     <BrowserRouter>
      <Routes>
           <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Logout" element={<Logout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
