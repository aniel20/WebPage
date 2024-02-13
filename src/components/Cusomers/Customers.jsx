import * as React from 'react';
import sprite from '../../images/sprite.svg';
import css from '../Cusomers/Customers.module.css';
import { Box, Container, MenuItem, MenuList } from '@mui/material';

export const Customers = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState('');

  const handleIconHover = iconName => {
    setHoveredIcon(iconName);
  };

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
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Union1')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Union1'
                      ? '#icon-Union2'
                      : '#icon-Union1')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Group1')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Group1'
                      ? '#icon-Group2'
                      : '#icon-Group1')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Group21')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Group21'
                      ? '#icon-Group22'
                      : '#icon-Group21')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Group31')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Group31'
                      ? '#icon-Group32'
                      : '#icon-Group31')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Group41')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Group41'
                      ? '#icon-Group42'
                      : '#icon-Group41')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
          <MenuItem
            className={css.menuItem}
            sx={{ padding: '0', alignItems: 'flex-start' }}
            onMouseEnter={() => handleIconHover('icon-Group51')}
            onMouseLeave={() => handleIconHover('')}
          >
            <Box
              className={css.iconCard}
              sx={{
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              <svg className={css.icon} aria-hidden="true">
                <use
                  href={
                    sprite +
                    (hoveredIcon === 'icon-Group51'
                      ? '#icon-Group52'
                      : '#icon-Group51')
                  }
                />
              </svg>
            </Box>
          </MenuItem>
        </MenuList>
      </Box>
    </Container>
  );
};
