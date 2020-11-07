import React, { useState } from 'react';
import {
    Navbar,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useGlobalState } from 'piral-core';
export type SideMenuProps = {
    history:any
}
const SideMenu: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const s = props.history
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = useGlobalState((s) => s.registry.menuItems);
    
    return (
        <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
       <ul>
       <li key="home">
                  <Link to="/" onClick={() => _goTo("/", props.history)}>Home</Link>
                                </li>
        {Object.keys(menuItems).map((p) => {
                        const item = menuItems[p];
                        const name = item.pilet;
                        if (item.settings.type === 'general') {
                            const Component = item.component;
                            return (
                                <li key={name}>
                                    <Link to={"/"+name} onClick={() => _goTo(name, props.history)}>{name}</Link>
                                    <Component />
                                </li>
                            );
                        }

                        return undefined;
                    })}
                    </ul>
      </div>
    );
}


function _goTo(name:string, history:any){
    history.push(name);
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    var x = document.getElementsByClassName("fixed-top");
    x[0].style.marginLeft = "0";
  }

export default withRouter(SideMenu);