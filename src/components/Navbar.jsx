import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMode, setToggleSidebar } from '../store/common/commonSlice';
import { t } from '../utils/common';
import FlexBetween from './FlexBetween';
import { useState } from 'react';

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      className="navbar"
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween className="navbar-left">
          <IconButton onClick={() => dispatch(setToggleSidebar())}>
            <MenuIcon />
          </IconButton>

          <FlexBetween
            className="navbar-search"
            backgroundColor={theme.palette.background.alt}
            borderRadius="0.8rem"
            gap="3rem"
            p=".1rem .5rem"
          >
            <InputBase placeholder={t('Search...')} />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween className="navbar-right" gap={1.5}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'light' ? (
              <DarkModeOutlined sx={{ fontSize: '1.5rem' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '1.5rem' }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: '1.5rem' }} />
          </IconButton>

          <FlexBetween>
            <Button onClick={handleOpen}>
              <FlexBetween gap="1rem">
                <Box
                  component="img"
                  alt="profile"
                  src={
                    'https://i.pinimg.com/564x/6d/60/e7/6d60e7c9c366fe879bb6c241b2f1e874.jpg'
                  }
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: 'cover', objectPosition: 'top' }}
                />

                <Box textAlign="left" textTransform="none">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.7rem"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {user?.name}
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    fontSize="0.6rem"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {user?.role}
                  </Typography>
                </Box>

                <ArrowDropDownOutlined
                  sx={{
                    color: theme.palette.secondary,
                    fontSize: '25px',
                  }}
                />
              </FlexBetween>
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
