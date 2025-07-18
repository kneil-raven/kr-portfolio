import React from "react";
import { ThemeProvider } from "./components/contexts";
import { Header, Footer } from "./components/layout";
// import { Hero, About, Projects, Skills, Contact } from './components/sections'
import "./styles/globals.css";

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-500">
        <Header />
        <main>

        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
