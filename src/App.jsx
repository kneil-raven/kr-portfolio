import React from 'react'
import { ThemeProvider } from './components/contexts/ThemeContext.jsx'
import { Header, Footer } from './components/layout';
import { Hero, About, Projects, Skills, Contact } from './components/sections'
import './styles/globals.css'


function App() {


  return (
    <ThemeProvider>
      <div>
        <Header />
      </div>
    </ThemeProvider>

  );

}


export default App;