import { Outlet } from 'react-router-dom';
// import Header from './Header/Header.jsx';
// import Footer from './footer/footer.jsx';

import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
    {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      
    {/* <Footer/> */}
      
    </>
  );
};

export default Layout;