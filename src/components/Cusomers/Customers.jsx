import * as React from 'react';
import sprite from '../../images/sprite.svg';
import css from '../Cusomers/Customers.module.css';
import { Box, Container, MenuItem, MenuList } from '@mui/material';

export const Customers = () => {
  /*   const cardIcon =
    theme.palette.mode === 'light' ? '#card-icon2' : '#card-icon1';

  const clockIcon =
    theme.palette.mode === 'light' ? '#clock-icon2' : '#clock-icon1';

  const diagramIcon =
    theme.palette.mode === 'light' ? '#diagram-icon2' : '#diagram-icon1';
  const astronautIcon =
    theme.palette.mode === 'light' ? '#astronaut-icon2' : '#astronaut-icon1'; */
  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        padding="0"
        sx={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: ' center',
        }}
      >
        <h1>Regular Customers</h1>
        <MenuList className={css.menuList}>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Union1'} />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Group1'} />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Group21'} />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Group31'} />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Group41'} />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ cursor: 'initial', padding: '0', alignItems: 'flex-start' }}
          >
            <Box className={css.iconCard}>
              <svg className={css.icon} aria-hidden="true">
                <use href={sprite + '#icon-Group51'} />
              </svg>
            </Box>
          </MenuItem>
        </MenuList>
      </Box>
    </Container>
  );
};
