import * as React from 'react';
import sprite from '../../images/sprite.svg';
import css from '../Features/Features.module.css';
import { Box, Container, MenuItem, MenuList } from '@mui/material';
import { useTheme } from '@mui/material';

export const Features = () => {
  const theme = useTheme();

  const cardBox =
    theme.palette.mode === 'light'
      ? { bgcolor: '#f5f4fada' }
      : { bgcolor: '#f5f4fa1d' };

  const cardIcon =
    theme.palette.mode === 'light' ? '#card-icon2' : '#card-icon1';

  const clockIcon =
    theme.palette.mode === 'light' ? '#clock-icon2' : '#clock-icon1';

  const diagramIcon =
    theme.palette.mode === 'light' ? '#diagram-icon2' : '#diagram-icon1';
  const astronautIcon =
    theme.palette.mode === 'light' ? '#astronaut-icon2' : '#astronaut-icon1';
  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        padding="0"
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: ' space-evenly',
        }}
      >
        <MenuList className={css.menuList}>
          <MenuItem className={css.menuItem}>
            <Box className={css.iconBox} sx={cardBox}>
              <svg className={css.icon} aria-hidden="true">
                <use href={`${sprite}${cardIcon}`} />
              </svg>
            </Box>
            <h3 className={css.title} sx={{ alignItems: 'left' }}>
              ATTENTION TO DETAILS
            </h3>
            <p className={css.text}>
              We go into all the details and processes of your business to
              develop a customized solution..
            </p>
          </MenuItem>
          <MenuItem className={css.menuItem}>
            <Box className={css.iconBox} sx={cardBox}>
              <svg className={css.icon} aria-hidden="true">
                <use href={`${sprite}${clockIcon}`} />
              </svg>
            </Box>
            <h3 className={css.title}>PUNCTUALITY</h3>
            <p className={css.text} sx={{ textTransform: 'none' }}>
              With us, you can feel safe and secure. An important principle of
              the company: respect your time and deadlines.
            </p>
          </MenuItem>
          <MenuItem className={css.menuItem}>
            <Box className={css.iconBox} sx={cardBox}>
              <svg className={css.icon} aria-hidden="true">
                <use href={`${sprite}${diagramIcon}`} />
              </svg>
            </Box>
            <h3 className={css.title}>PLANNING</h3>
            <p className={css.text}>
              You will be able to observe and participate in every phase of
              solution development and implementation.
            </p>
          </MenuItem>
          <MenuItem className={css.menuItem}>
            <Box className={css.iconBox} sx={cardBox}>
              <svg className={css.icon} aria-hidden="true">
                <use href={`${sprite}${astronautIcon}`} />
              </svg>
            </Box>
            <h3 className={css.title}>MODERN TECHNOLOGIES</h3>
            <p className={css.text}>
              We use innovative tools to solve assigned tasks. It's time to
              simplify work processes.
            </p>
          </MenuItem>
        </MenuList>
      </Box>
    </Container>
  );
};
