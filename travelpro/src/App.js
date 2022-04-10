import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from './pages/Index';
import Lin from './pages/Lin';
import Sin from './pages/Sin';
import Pro from './pages/Pro';
import Art from './pages/Art';
import SingArt from './pages/SingArt';
import SearchR from './pages/SearchR'
import React from "react";
import {useContext} from 'react'
import {UserContext} from './context/UserContext';
import Form from "./pages/Form";
import Edit from "./pages/Edit";
import AddArt from "./pages/AddArt";

export default function App() {

    const {user} = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        { user && (
          <>
          <Route path="/" element={<Index />} />
          <Route path="profile" element={<Pro />} />
          <Route path="editprofile" element={<Edit />} />
          <Route path="article" element={<Art />} ></Route>
          <Route path="article/:ar_no" element={<SingArt />} />
          <Route path="search" element={<SearchR />} />
          <Route path="feedback" element={<Form />} /> 
          <Route path="editarticle" element={<AddArt />} />
          </>
        )}
        {!user && (
          <>
              <Route path="/login" element={<Lin />} />
              <Route path="/register" element={<Sin />} /> 
          </>
        )}
        <Route path="*" element={<Navigate to={user ? '/':'/login'} />} /> 
      </Routes>
    </BrowserRouter>
  );
}