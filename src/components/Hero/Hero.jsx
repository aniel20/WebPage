import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import css from '../Hero/Hero.module.css';

export const Hero = () => {
  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        className={css.BgImg}
        padding="0"
        sx={{
          height: '80vh',
        }}
      >
        <Typography
          className={css.heroTitle}
          sx={{
            fontFamily: 'Roboto',
            fontSize: '44px',
            fontWeight: 900,
            lineHeight: '60px',
            letterSpacing: '0.06em',
            textAlign: 'center',
            textTransform: 'none',
            color: ' hsla(0, 0%, 100%, 1)',
          }}
        >
          EFFECTIVE SOLUTIONS FOR <br />
          YOUR BUSINESS
        </Typography>
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
            flexDirection: 'column',
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
          Request our service
        </Button>
      </Box>
    </Container>
  );
};
