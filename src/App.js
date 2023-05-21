//import logo from "./images/logo.svg";
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { HomePage } from "./AboutPage";
import { Apple } from "./Apple"; 
import { NotFound } from "./NotFound"; 
import { globalStyles } from './constraints';
import { theme } from "./styles";
import { ThemeProvider } from "@emotion/react";

const App = () => (
  <>
  <ThemeProvider theme={theme}>
  <img src="http://localhost:3000/logo192.png"alt="App Logo"/> 
  <BrowserRouter>
  <div  style={{
    ...globalStyles.navbar,
  }}>
    <Link 
    to="/"
    style={{
      marginLeft: 5,
    }}
    >
      Home
    </Link>
    <Link 
    to="/apple"
    style={{
      marginLeft: 5,
    }}
    >
      Apple
    </Link>
    <Link to ="/applet"
    style={{
      marginLeft: 10,
    }}>Applet</Link>
  </div>
  <Routes>
    <Route path= "/" element={<HomePage />}></Route>
    <Route path= "/apple" element={<Apple />}></Route>
    <Route path= "*" element={<NotFound />}></Route>
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
  </>
  
);

export default App;
