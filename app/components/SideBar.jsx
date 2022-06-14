import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <nav className="nav nav-pills nav-justified">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          to="view"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          to="page-1"
        >
          Page 1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          to="page-2"
        >
          Page 2
        </NavLink>
      </nav>
    </div>
  )
}

export { SideBar }
