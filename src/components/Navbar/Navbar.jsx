import React from 'react';
import css from './Navbar.module.css';

import { Box, MenuItem, MenuList, Typography, Link } from '@mui/material';
import { useTheme, ThemeProvider } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const Header = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
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
              color: 'text.primary',
            }}
          >
            <MenuItem>
              <Typography className={css.menuItem}>Studio</Typography>
            </MenuItem>
            <MenuItem>
              <Typography className={css.menuItem}>Portofolio</Typography>
            </MenuItem>
            <MenuItem>
              <Typography className={css.menuItem}>Contacts</Typography>
            </MenuItem>
          </MenuList>

          <MenuList
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          >
            <MenuItem>
              <Link className={css.menuItem} sx={{ textDecoration: 'none' }}>
                info@devstudio.com
              </Link>
            </MenuItem>
            <MenuItem>
              <Link sx={{ textDecoration: 'none' }}>+1 212-772-4150</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Header;
