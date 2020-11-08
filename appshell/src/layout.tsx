import * as React from 'react';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';
import { Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;



const sideMenu  = (
<SideNav
  onSelect={(selected) => {
      // Add your code here
  }}
>
  <SideNav.Toggle />
  <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
          <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
              Home
          </NavText>
      </NavItem>
      <NavItem eventKey="charts">
          <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
              Charts
          </NavText>
          <NavItem eventKey="charts/linechart">
              <NavText>
                  Line Chart
              </NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
              <NavText>
                  Bar Chart
              </NavText>
          </NavItem>
      </NavItem>
  </SideNav.Nav>
</SideNav>
)

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/not-found">
        Not Found
      </Link>
    </MenuItem>
  </>
);


export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: props => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new microfrontend app shell, built with:</p>
      <div>
        {children}
      </div>
    </div>
  ),
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      {sideMenu}
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Piral
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
              aria-expanded={!collapsed}>
              <ul className="navbar-nav flex-grow">
                {children}
                {defaultMenuItems}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};
