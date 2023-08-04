import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import LifeTimeStatsBar from '../components/LifetimeStatsBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <LifeTimeStatsBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
