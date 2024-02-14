import * as React from 'react';
import { useTheme } from '@mui/material';
import css from '../OurTeam/OurTeam.module.css';
import { Box, Container, MenuItem, MenuList, Fab } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const OurTeam = () => {
  const theme = useTheme();
  const cardShadow =
    theme.palette.mode === 'light'
      ? '0px 3px 6px 3px rgba(33,33,33,0.3)'
      : '0px 3px 6px 3px rgba(255,255,255,0.3)';
  /*   const borderShadow =
    theme.palette.mode === 'light'
      ? '0px 2px 3px 0px rgba(33,33,33,0.3)'
      : '0px 2px 3px 0px rgba(255,255,255,0.3)'; */
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        /* boxShadow: borderShadow, */
      }}
      disableGutters
    >
      <Box
        padding="0"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.mode === 'light' ? '#F5F4FA' : '#121212',
        }}
      >
        <h1 className="css.mainTitle">Our Team</h1>
        <MenuList className={css.cardList}>
          <MenuItem
            className={css.menuCard}
            sx={{
              cursor: 'initial',
              padding: '0',
              boxShadow: cardShadow,
            }}
          >
            <Box
              className={css.firstImg}
              sx={{
                cursor: 'initial',
                width: '38vh',
                height: '38vh',
              }}
            />
            <h3 className={css.title} sx={{ alignItems: 'left' }}>
              Christopher Walker
            </h3>
            <p className={css.text}>Product Designer</p>
            <MenuList
              className={css.mediaList}
              sx={{ margin: '-2vh 0 3vh 0 ' }}
            >
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
          </MenuItem>
          <MenuItem
            className={css.menuCard}
            sx={{
              cursor: 'initial',
              padding: '0',
              boxShadow: cardShadow,
            }}
          >
            <Box
              className={css.secondImg}
              sx={{
                cursor: 'initial',
                width: '38vh',
                height: '38vh',
              }}
            ></Box>
            <h3 className={css.title}>Kylie Evans</h3>
            <p className={css.text} sx={{ textTransform: 'none' }}>
              Frontend Developer
            </p>
            <MenuList
              className={css.mediaList}
              sx={{ margin: '-2vh 0 3vh 0 ' }}
            >
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
          </MenuItem>
          <MenuItem
            className={css.menuCard}
            sx={{
              cursor: 'initial',
              padding: '0',
              boxShadow: cardShadow,
            }}
          >
            <Box
              className={css.thirdImg}
              sx={{
                cursor: 'initial',
                width: '38vh',
                height: '38vh',
              }}
            ></Box>
            <h3 className={css.title}>Ryan Harris</h3>
            <p className={css.text}>Marketing</p>
            <MenuList
              className={css.mediaList}
              sx={{ margin: '-2vh 0 3vh 0 ' }}
            >
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
          </MenuItem>
          <MenuItem
            className={css.menuCard}
            sx={{
              cursor: 'initial',
              padding: '0',
              boxShadow: cardShadow,
            }}
          >
            <Box
              className={css.fourthImg}
              sx={{
                cursor: 'initial',
                width: '38vh',
                height: '38vh',
              }}
            ></Box>
            <h3 className={css.title}>Tyler Moore</h3>
            <p className={css.text}>UI Designer</p>
            <MenuList
              className={css.mediaList}
              sx={{ margin: '-2vh 0 3vh 0 ' }}
            >
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
          </MenuItem>
        </MenuList>
      </Box>
    </Container>
  );
};
