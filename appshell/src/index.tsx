import * as React from "react";
import { render } from "react-dom";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import {
  createInstance,
  useGlobalState,
  LoadingIndicatorProps,
  useAction,
  Piral,
  SetComponent,
  SetRoute,
  PiralPlugin,
} from "piral-core";
import { createMenuApi } from "piral-menu";
import NavMenu  from "../components/navmenu/NavMenu";
import { Container } from "reactstrap";
import { Home } from "../components/home/home";
import SideMenu from "../components/sidenav/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { helperService, IHelperService } from './helpers/helper';

function Loader() {
  return <div className="app-center">Loading ...</div>;
}

const Sitemap: React.FC<RouteComponentProps> = () => {
  const pages = useGlobalState((s) => s.registry.pages);

  return (
    <ul>
      <li>
        <Link to="/">Go to /</Link>
      </li>
      {Object.keys(pages)
        .map((url) => url.replace(":id", `${~~(Math.random() * 1000)}`))
        .map((url) => (
          <li key={url}>
            <Link to={url}>Go to {url}</Link>
          </li>
        ))}
      <li>
        <Link to="/sitemap">Go to /sitemap</Link>
      </li>
      <li>
        <Link to="/not-found">Go to /not-found</Link>
      </li>
    </ul>
  );
};

const Menu: React.FC = () => {
  const menuItems = useGlobalState((s) => s.registry.menuItems);

  return (
    <ul className="app-nav">
      <li>
        <Link to="/" onClick={() => _goTo(name, props.history)}>Home</Link>
      </li>
      {Object.keys(menuItems).map((name) => {
        const item = menuItems[name];

        if (item.settings.type === "general") {
          const Component = item.component;
          return (
            <li key={name}>
              <Component />
            </li>
          );
        }

        return undefined;
      })}
      <li>
        <Link to="/sitemap">Sitemap</Link>
      </li>
    </ul>
  );
};

const Layout: React.FC = ({ children }) => {
  let history = useHistory();
  return (
    <div>
      <header>
        <NavMenu history={history} />
      </header>
      <div>
      <SideMenu history={history} />
        <div id="main" style={{marginLeft:'200px'}}>
          <Container fluid={true}>
            <div className="app-content">{children}</div>
            {/* <button
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="btn btn-primary"
              onClick={() => openNav()}
            >
              &#9776; open
            </button> */}
          </Container>
        </div>
      </div>
    </div>
  );
};


export interface SharedApi {
  Do(): void;
  helperService: IHelperService;
}

export function ShareToPilets(): PiralPlugin<SharedApi> {
  return context => {
    return (api, target) => {
      return {
        Do() {
          alert(`Hello from ${target.name}!`);
        },
        helperService: helperService
      };
    };
  };
}

declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends SharedApi {}
}

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  var x = document.getElementsByClassName("fixed-top");
  x[0].style.marginLeft = "200px";
}

function _goTo(name:string, history:any){
  history.push(name);
}
const instance = createInstance({
  plugins: [createMenuApi(), ShareToPilets()],
  requestPilets() {
    return fetch('https://feed.piral.cloud/api/v1/pilet/demo').then(res => res.json()).then(res => res.items).catch(() => { return new Promise(resolve => setTimeout(() => resolve([]), 2)); });
  },
});

const app = (
  <Piral instance={instance}>
    <SetComponent name="LoadingIndicator" component={Loader} />
    <SetComponent name="Layout" component={Layout} />
    <SetRoute path="/" component={Home} />
  </Piral>
);
render(app, document.querySelector("#app"));
