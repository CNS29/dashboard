import {
  ChevronRightOutlined,
  HomeOutlined,
  PeopleAlt,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { t } from '../utils/common';
import FlexBetween from './FlexBetween';
const DRAWER_WIDTH = 250;

const items = [
  {
    label: 'Dashboard',
    icon: <HomeOutlined />,
    url: '/dashboard',
  },
  {
    label: 'Management',
    icon: undefined,
  },
  {
    label: 'Users',
    icon: <PeopleAlt />,
    url: '/users',
  },
  {
    label: 'Products',
    icon: <PeopleAlt />,
    url: '/products',
  },
];

const Sidebar = ({ user }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isToggleSidebar = useSelector(
    (states) => states.common.isToggleSidebar
  );
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Drawer
      className="sidebar"
      sx={{
        width: isMobile || !isToggleSidebar ? 0 : DRAWER_WIDTH,
        '& .MuiDrawer-paper': {
          color: theme.palette.secondary[200],
          backgroundColor: theme.palette.background.alt,
          borderWidth: '1px',
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          justifyContent: 'space-between',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isToggleSidebar}
    >
      <Box>
        <Typography
          className="sidebar-title"
          variant="h4"
          fontWeight="bold"
          my="2rem"
          textAlign="center"
          sx={{ color: theme.palette.text.primary }}
        >
          My Project
        </Typography>

        <List>
          {items.map(({ label, icon, url }) =>
            icon ? (
              <ListItem
                key={label}
                disablePadding
                sx={{ color: theme.palette.text.primary }}
              >
                <ListItemButton
                  className="sidebar-item"
                  selected={pathname.includes(url)}
                  onClick={() => navigate(url)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={t(label)} />
                  {pathname.includes(url) && <ChevronRightOutlined />}
                </ListItemButton>
              </ListItem>
            ) : (
              <Typography
                className="sidebar-item-title"
                key={label}
                p="1.5rem 0 1rem 1rem"
                sx={{ color: theme.palette.text.primary }}
              >
                {t(label)}
              </Typography>
            )
          )}
        </List>
      </Box>

      <Box>
        <Divider />
        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 1rem 2rem">
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

          <Box>
            <Typography
              fontWeight="bold"
              fontSize="0.8rem"
              sx={{ color: theme.palette.text.primary }}
            >
              {user?.name}
            </Typography>

            <Typography
              fontWeight="bold"
              fontSize="0.7rem"
              sx={{ color: theme.palette.text.primary }}
            >
              {user?.role}
            </Typography>
          </Box>

          <SettingsOutlined sx={{ color: theme.palette.text.primary }} />
        </FlexBetween>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
