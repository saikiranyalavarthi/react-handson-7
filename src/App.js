import './App.css';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Students from './Components/Students';
import ContactUs from './Components/Contactus';
import Navbar from './Components/Navbar';
import Addstudent from "./Components/Addstudent"
import Edit from './Components/Edit';
import store from './Components/pages/Store'
import {Provider} from "react-redux";



const App = () => {

  
    return (
      
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="App">
          <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Addstudent />}/>
            <Route path="students/edit" element={<Edit />} />
          </Routes>
          </Provider>
          </div>
        </BrowserRouter>
    )

  
}

export default App;