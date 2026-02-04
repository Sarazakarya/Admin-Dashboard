import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import TemporaryDrawer from '../Drawer/TemporaryDrawer';
import './LayOut.css';

export const LayOut = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Header sideBar={sideBar} setSideBar={setSideBar} />
     <div className="main">
  <div className={`side__Warp ${sideBar ? "openSide" : "close"}`}>
    <TemporaryDrawer sideBar={sideBar} setSideBar={setSideBar} />
  </div>

  <div className="content">
    <Outlet />
  </div>
</div>

{sideBar && <div className="overlay" onClick={() => setSideBar(false)} />}

    </>
  );
};
