import React from "react";
import { Nav } from "react-bootstrap";
import Link from "./Link";

const NavigationBar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link href="/">Accordion index</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/search">Searchbar API</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/dropdown">Dropdown color menu</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/translate">Translate widget</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavigationBar;
