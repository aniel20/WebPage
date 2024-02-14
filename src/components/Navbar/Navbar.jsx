import React from 'react';
import css from './Navbar.module.css';
import { Box, MenuList, Link } from '@mui/material';
import ThemeSwitch from '../ThemeSwich';
import { useTheme } from '@mui/material';
export const Header = ({ toggleDarkMode }) => {
  const theme = useTheme();
  const borderShadow =
    theme.palette.mode === 'light'
      ? 'rgba(33,33,33,0.3)'
      : 'rgba(255,255,255,0.3)';
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: `2px solid ${borderShadow}`,
      }}
      className={css.navbar}
    >
      <Link
        sx={{
          textDecoration: 'none',
          color: 'text.primary',
          cursor: 'pointer',
        }}
        to="/"
      >
        <h1 className={css.title}>
          <span className={css.titleBlue}>Web</span>Studio
        </h1>
      </Link>
      <MenuList
        sx={{
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          gap: '5vh',
          bgcolor: 'background.default',
        }}
      >
        <li sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '0 0 3.5vh 0',
              cursor: 'pointer',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '5px solid #2196F3',
              },
              '&:active': {
                borderBottom: '5px solid #2196F3',
              },
            }}
          >
            Studio
          </Link>
        </li>
        <li sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '0 0 3.5vh 0',
              cursor: 'pointer',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '5px solid #2196F3',
              },
              '&:active': {
                borderBottom: '5px solid #2196F3',
              },
            }}
          >
            Portofolio
          </Link>
        </li>
        <li sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '0 0 3.5vh 0',
              cursor: 'pointer',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '5px solid #2196F3',
              },
              '&:active': {
                borderBottom: '5px solid #2196F3',
              },
            }}
          >
            Contacts
          </Link>
          <span sx={{}}></span>
        </li>
      </MenuList>
      <div>
        <ThemeSwitch onToggle={toggleDarkMode} />
      </div>
      <MenuList
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <li sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '0',
              cursor: 'pointer',
              '&:hover': {
                color: '#2196F3',
              },
            }}
          >
            info@devstudio.com
          </Link>
        </li>
        <li sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              padding: '0',
              textDecoration: 'none',
              color: 'text.primary',
              cursor: 'pointer',
              '&:hover': {
                color: '#2196F3',
              },
            }}
          >
            +1 212-772-4150
          </Link>
        </li>
      </MenuList>
    </Box>
  );
};

export default Header;
