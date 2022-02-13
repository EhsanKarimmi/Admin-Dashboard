import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { sidebarLinks } from "./SidebarLinks";
import {
    Nav,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
} from "reactstrap";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar dark expand="md" className="mainNavbar">
                <NavbarBrand
                    className="  d-md-flex justify-content-md-center pe-md-3 "
                    href="#"
                >
                    <h1 className="d-inline-block   ms-3 mt-md-5">Venus</h1>
                </NavbarBrand>
                <NavbarToggler
                    className="me-3"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <Collapse
                    className=" mt-md-5 mb-md-4 flex-md-column  overflow-auto"
                    isOpen={isOpen}
                    navbar
                >
                    <Nav
                        className="gap-md-4 gap-2 mt-2 mb-md-4"
                        navbar
                        vertical
                    >
                        {sidebarLinks.map(({ icon, href, text }) => {
                            return (
                                <NavItem
                                    key={text}
                                    className="navItem ps-2  fs-6 fw-bold d-flex align-content-center"
                                >
                                    <NavLink
                                        href={href}
                                        className="d-flex gap-3 flex-md-fill align-items-center"
                                    >
                                        {icon}
                                        <span>{text}</span>
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Sidebar;
