import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';

const Header = ({ title = 'Title', subtitle = 'Subtitle' }) => {
  const theme = useTheme();

  return (
    <Box sx={{ color: theme.palette.text.primary }}>
      <Typography variant="h2" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
