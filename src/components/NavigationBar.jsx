import React from "react";
import { Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/" eventKey="link-1">
            Accordion index
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/search" eventKey="link-2">
            Searchbar API
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dropdown" eventKey="link-3">
            Dropdown color menu
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/translate" eventKey="link-4">
            Translate widget
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavigationBar;
