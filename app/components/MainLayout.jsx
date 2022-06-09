import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import Config from '../config/config.json';

function MainLayout() {
  console.log(Config);
  return (
    <div id='main-wrapper'>
      <SideBar />
      <h4>{Config.appName}</h4>
      <Outlet />
    </div>
  );
}

export {
  MainLayout
};