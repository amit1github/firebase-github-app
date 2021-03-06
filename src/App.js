import React, {useState} from "react";
import './App.css';

// react router
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from "./Context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const App = () => {

  const [user, setUser] = useState(null)

  return (
   <BrowserRouter>
     <ToastContainer/>
     <UserContext.Provider value={{user, setUser}}>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<PageNotFound/>} /> 
          {/* here star is used for all the other routes that are not mentioned */}
        </Routes>
        <Footer/>
     </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;
