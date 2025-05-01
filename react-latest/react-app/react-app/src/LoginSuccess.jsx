import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';     // Import Home component
import Contacts from './Components/Contacts/Contacts.jsx';     // Import Home component
import WrappperAuth from './WrappperAuth.jsx';


function LoginSuccess() {
  return (
    <Router>
      <nav>
        {/* Navigation Links */}
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ol>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />         Home Page Route
        <Route path="/contacts" element={<Contacts />} /> Contacts Page Route
      </Routes>
    </Router>
  );
}

// export default LoginSuccess

export default WrappperAuth(LoginSuccess);
