import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <>
    <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
    {children}
    <Footer />
    </main>
    </main>
  </>
);

export default Layout;
