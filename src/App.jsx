import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import Home from "../src/pages/Home";
import AddTransaction from "../src/pages/AddTransaction";
import Transaction from "../src/pages/Transaction";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Profile from "../src/pages/Profile";
import NotFound from "../src/pages/NotFound";
import Setting from "./pages/setting/Setting";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/addTransaction' element={<AddTransaction/>} />
                <Route path='/transaction' element={<Transaction/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/notFound' element={<NotFound/>} />
                <Route path='/setting/*' element={<Setting/>} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
