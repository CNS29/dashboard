import { Box } from '@mui/material';
import { useGetUsersQuery } from '../../store/apis';
import Header from '../../components/Header';
import TableCommon from '../../components/Table';
import { userConfig } from '../../common/configs/tables/user';

const Users = () => {
  const { data, isLoading } = useGetUsersQuery();

  const onSort = (sort) => {
    console.log(sort);
  };

  return (
    <Box id="users">
      <Header title="Users" subtitle="List of users" />

      <Box mt={3}>
        {!isLoading && (
          <TableCommon columns={userConfig} rows={data.data} onSort={onSort} />
        )}
      </Box>
    </Box>
  );
};

export default Users;
