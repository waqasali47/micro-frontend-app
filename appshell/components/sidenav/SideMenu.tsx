import React, { useState } from 'react';
import {
    Navbar,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useGlobalState } from 'piral-core';

const SideMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        {Object.keys(menuItems).map((name) => {
                        const item = menuItems[name];

                        if (item.settings.type === 'general') {
                            const Component = item.component;
                            return (
                                <li key={name}>
                                    <Component />
                                </li>
                            );
                        }

                        return undefined;
                    })}
      </div>
    );
}



  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    var x = document.getElementsByClassName("fixed-top");
    x[0].style.marginLeft = "0";
  }

export default withRouter(SideMenu);