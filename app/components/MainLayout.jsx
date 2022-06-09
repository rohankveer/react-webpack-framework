import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import Config from '../config/config.json';

function MainLayout() {
  return (
    <div id='main-wrapper'>
      <SideBar />
      <h4>{Config.appName}</h4>
      <h4>{L10n.t('hello')}</h4>
      <h4>{L10n.t('dynamicVariables', { variable: 'Hello' })}</h4>
      <Outlet />
    </div>
  );
}

export {
  MainLayout
};