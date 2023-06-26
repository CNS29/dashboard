import { Box, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector((states) => states.common.isLoading);
  const theme = useTheme();

  return (
    <Box
      position="fixed"
      display={isLoading ? 'block' : 'none'}
      sx={{
        inset: 0,
        background: theme.palette.backgroundCustom.black_01,
        zIndex: 9999,
      }}
    >
      <FlexBetween height="100vh">
        <div className="loader"></div>
      </FlexBetween>
    </Box>
  );
};

export default Loader;
