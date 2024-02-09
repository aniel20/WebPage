import React, { useState } from 'react';
import { Switch } from '@mui/material';

const ThemeSwitch = ({ onToggle }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    onToggle(!toggleDarkMode); // Notify parent component about the theme change
  };

  return (
    <div>
      <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
    </div>
  );
};

export default ThemeSwitch;
