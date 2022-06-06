import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';

function MainLayout() {
  return (
    <div id='main-wrapper'>
      <SideBar />
      <Outlet />
    </div>
  );
}

export {
  MainLayout
};