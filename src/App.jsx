import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { Header, Footer } from './components/layout';
import { Hero, About, Projects, Skills, Contact } from './components/sections'
import './styles/globals.css'


function App() {


  return (
    <div className="min-h-screen transition-all duration-500">
          <Header />
    </div>

  );

}


export default App;