import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import ForgotPassword from './components/forgotpassword/forgotpassword';
import Resetpassword from './components/resetpassword/resetpassword';
import Movielist from './components/Movielist/Movielist';
import Data from './components/Data/Data';
import Abc from './components/abc/abc';
import Watchlatr from './components/watchlatr/watchlatr';
import Views from './components/views/views';
import Watchhistory from './components/watchhistory/watchhistory';
function App() {
  return (
    <div>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<Resetpassword />} />
          <Route path="movielist" element={<Movielist />} />
          <Route path="plan" element={<Data />} />
          <Route path="list" element={<Abc />} />
          <Route path="watchlatr" element={<Watchlatr />} />
          <Route path="views" element={<Views />} />
          <Route path="watchhistory" element={<Watchhistory />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
