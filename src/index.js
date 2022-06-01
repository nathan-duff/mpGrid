import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Mui from './routes/Mui';
import AgGrid from './routes/AgGrid';
import MenuBar from "./components/MenuBar";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C84B31'
    },
    secondary: {
      main: '#9e3b26'
    },
  },
});
let data;
const userAction = async () => {
  const response = await fetch('https://api.openparliament.ca/politicians/?format=json');
  const myJson = await response.json();
  data = await myJson;
  const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <header>
            <MenuBar title="Home" />
          </header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="grid" element={<Mui data={data} />} />
            <Route path="table" element={<AgGrid data={data} />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
userAction();
