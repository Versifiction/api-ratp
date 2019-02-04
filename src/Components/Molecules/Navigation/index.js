import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
                <Link to="/" href="/">API RATP</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" href="/">Accueil</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/horaires" href="/horaires">Horaires</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/stations" href="/stations">Stations</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/trafic" href="/trafic">Trafic</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/plans" href="/plans">Plans</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/a-propos"href="/a-propos">À propos</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Navigation;