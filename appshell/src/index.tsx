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
import NavMenu  from "../components/navmenu/navmenu";
import { Container } from "reactstrap";
import { Home } from "../components/home/home";
import SideMenu from "../components/sidenav/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { helperService, IHelperService } from './helpers/helper';

function Loader() {
  return <div className="app-center">Loading ...</div>;
}


const Layout: React.FC = ({ children }) => {
  let history = useHistory();
  const menuItems = useGlobalState((s) => s.registry.menuItems);

  return (
    <div>
      <header>
        <NavMenu history={history} />
      </header>
      <div>
      <SideMenu history={history}  />
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

///To share code from inside the appshell
// you would do the following.
//This extends the PiletApi and then you can have access to exposed functions
//in you pilets. To see how this is consumed? Look at shared-lib pilet which is included in
//the base folder.
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
////End share code logic
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
    return fetch('https://feed.piral.cloud/api/v1/pilet/demo').then(res => res.json()).then(res => res.items).catch(() => { return new Promise(resolve => setTimeout(() => resolve([]), 1000)); });
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
