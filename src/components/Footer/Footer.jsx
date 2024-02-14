import React from 'react';
import css from './Footer.module.css';
import {
  Box,
  MenuList,
  Link,
  Container,
  Fab,
  TextField,
  Button,
} from '@mui/material';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTheme } from '@mui/material';

export const Footer = ({ toggleDarkMode }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: 'flex',
        height: '35vh',
        gap: '20vh',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: theme.palette.mode === 'light' ? '#2F303A' : '#121212',
      }}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0',
        }}
      >
        <Link
          sx={{
            textDecoration: 'none',
            color: ' #ffffff',
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
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1vh',
            color: ' #ffffff',
            cursor: 'pointer',
          }}
        >
          <li sx={{ padding: '0px' }} className={css.menuItem}>
            <Link
              to="/"
              sx={{
                textDecoration: 'none',
                padding: '0',
                color: '#FFFFFF4D',
                cursor: 'pointer',
              }}
            >
              695 Park Ave, NY 10065, USA
            </Link>
          </li>
          <li sx={{ padding: '0px' }} className={css.menuItem}>
            <Link
              to="/"
              sx={{
                textDecoration: 'none',
                padding: '0',
                color: '#FFFFFF4D',
                cursor: 'pointer',
              }}
            >
              info@devstudio.com
            </Link>
          </li>
          <li sx={{ padding: '0px' }} className={css.menuItem}>
            <Link
              to="/"
              sx={{
                textDecoration: 'none',
                padding: '0 0 2.5vh 0',
                color: '#FFFFFF4D',
                cursor: 'pointer',
              }}
            >
              +1 212-772-4150
            </Link>
          </li>
        </MenuList>
      </Box>
      <Box sx={{ color: '#FFFFFF' }}>
        <h2>FIND US ON</h2>
        <MenuList className={css.mediaList}>
          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <InstagramIcon fontSize="small" />
          </Fab>
          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <TwitterIcon fontSize="small" />
          </Fab>

          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <FacebookRoundedIcon fontSize="small" />
          </Fab>

          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </Fab>
        </MenuList>
      </Box>
      <Box sx={{ color: '#FFFFFF' }}>
        <h2>SUBSCRIBE TO THE NEWSLETTER </h2>
        <Box className={css.subscribeForm}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            size="small"
            sx={{
              width: '50vh',
              height: '6vh',
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF4D',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#FFFFFF4D',
                  color: '#FFFFFF4D',
                },
              '& .MuiInputLabel-root': {
                color: '#FFFFFF4D',
              },
            }}
          />

          <Button
            className={css.Btn}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '30px',
              letterSpacing: '0.06em',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              textTransform: 'none',
              bgcolor: '#2196F3',
              width: '200px',
              height: '50px',
              borderRadius: '4px',
              color: ' hsla(0, 0%, 100%, 1)',
              padding: '0',
              '&:hover': {
                bgcolor: '#188CE8',
                cursor: 'pointer',
              },
            }}
          >
            Subscribe <TelegramIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
