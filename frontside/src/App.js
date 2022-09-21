import React from "react";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import '../src/components/layout/App.css'
import Form from "./components/Shopkeeper/register/Form";
import Login from "./components/Shopkeeper/Login/Login";
import Shopowner from "./components/Shopkeeper/Dashboard/Shopowner";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
import LoginAdmin from './components/admin/Login-admin.jsx'
import {CartProvider}  from "react-use-cart"


const App = ()=>{
    return(  
    <CartProvider>
      <Router>
        <Header/>
<<<<<<< HEAD
        <Routes>
        <Route path="/"  element={<Home />}/>
=======
      <Routes>
        <Route path="/"  element={<Home/>}/>
>>>>>>> 61b2b828c1bf04428988704fbcf8d4adacc1f01c
        <Route  path="/signup"  element={<Form/>}   />
        <Route path="/login"  element={<LoginAdmin/>}  />
        <Route path="/sellercenter"  element={<Login/>}  />
      </Routes>
        <Footer/>
          </Router>
      </CartProvider>
    )
}

export default App;

