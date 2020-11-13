import React, { useState } from 'react';
import {
    Navbar,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './navmenu.css';
import { useGlobalState } from 'piral-core';

const NavMenu: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = useGlobalState((s) => s.registry.menuItems);

    return (
            <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/" onClick={() => _goTo('/', props.history)}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
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
                    </ul>
                  
                 </div>
        </Navbar>
    );
}
function _goTo(name:string, history:any){
    history.push("/");
}
export default NavMenu;

