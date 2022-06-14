import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import Config from '../config/config.json'
import Debug from '../common/Debug'
import PrintName from './PrintName'

function MainLayout() {
  Debug.log("Hello from log")
  const b = 0;
  return (
    <div id="main-wrapper">
      <SideBar />
      <h4>{Config.appName}</h4>
      <h4>{L10n.t('hello')}</h4>
      <h4>{L10n.t('dynamicVariables', { variable: 'Hello' })}</h4>
      <PrintName name={12345} />
      <Outlet />
    </div>
  )
}

export { MainLayout }
