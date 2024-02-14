import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Navbar/Navbar';
import { Hero } from './Hero/Hero';
import { Features } from './Features/Features';
import { WhatWeDo } from './WhatWeDo/WhatWeDo';
import { OurTeam } from './OurTeam/OurTeam';
import { Customers } from './Cusomers/Customers';
import { Footer } from './Footer/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'light' : 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      <WhatWeDo />
      <OurTeam />
      <Customers />
      <Footer />
    </ThemeProvider>
  );
}
