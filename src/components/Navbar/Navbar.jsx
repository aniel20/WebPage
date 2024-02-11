import React from 'react';
import css from './Navbar.module.css';
import { Box, MenuItem, MenuList, Link } from '@mui/material';
import ThemeSwitch from '../ThemeSwich';

const Header = ({ toggleDarkMode }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
      className={css.navbar}
    >
      <Link sx={{ textDecoration: 'none', color: 'text.primary' }} to="/">
        <h1 className={css.title}>
          <span className={css.titleBlue}>Web</span>Studio
        </h1>
      </Link>
      <MenuList
        sx={{
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          bgcolor: 'background.default',
        }}
      >
        <MenuItem sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '16px',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '3px solid #2196F3',
              },
              '&:active': {
                borderBottom: '3px solid #2196F3',
              },
            }}
          >
            Studio
          </Link>
        </MenuItem>
        <MenuItem sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '16px',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '3px solid #2196F3',
              },
              '&:active': {
                borderBottom: '3px solid #2196F3',
              },
            }}
          >
            Portofolio
          </Link>
        </MenuItem>
        <MenuItem sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '16px',
              '&:hover': {
                color: '#2196F3',
              },
              '&:focus-visible': {
                borderBottom: '3px solid #2196F3',
              },
              '&:active': {
                borderBottom: '3px solid #2196F3',
              },
            }}
          >
            Contacts
          </Link>
        </MenuItem>
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
        <MenuItem sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              padding: '0',
              '&:hover': {
                color: '#2196F3',
              },
            }}
          >
            info@devstudio.com
          </Link>
        </MenuItem>
        <MenuItem sx={{ padding: '0px' }} className={css.menuItem}>
          <Link
            to="/"
            sx={{
              padding: '0',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': {
                color: '#2196F3',
              },
            }}
          >
            +1 212-772-4150
          </Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default Header;
