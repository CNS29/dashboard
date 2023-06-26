import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useGetUserQuery } from '../store/apis/index';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Loader from './Loader';

const Layout = () => {
  const id = useSelector((states) => states.common.userId);
  const { data } = useGetUserQuery(id);

  return (
    <>
      <Box display="flex" width="100%" height="100%">
        <Sidebar user={data?.data} />

        <Box flexGrow={1}>
          <Navbar user={data?.data} />
          <Box m="1.5rem 2rem">
            <Outlet />
          </Box>
        </Box>
      </Box>

      <Loader />
    </>
  );
};

export default Layout;
