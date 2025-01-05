import React from 'react';
import './Components/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Blog1 from './Components/blogs/Blog1'
import Blog2 from './Components/blogs/Blog2'
import Blog3 from './Components/blogs/Blog3'
import Dashboard from './Components/Dashboard';

function App() {
  return (

    <Routes>
    <Route
          path="/"
          element={
            
            <Home/>
          }/>
    <Route
          path="/about"
          element={
            
            <About/>
          }/>
    <Route
          path="/dashboard"
          element={
            
            <Dashboard/>
          }/>
    <Route
          path="/contact"
          element={
            
            <Contact/>
          }/>
    <Route
          path="/blog"
          element={
            
            <Blog/>
          }/>
    <Route
          path="/blog1"
          element={
            
            <Blog1/>
          }/>
    <Route
          path="/blog2"
          element={
            
            <Blog2/>
          }/>
    <Route
          path="/blog3"
          element={
            
            <Blog3/>
          }/>
          </Routes>

  );
}

export default App;
