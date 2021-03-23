import React from "react";
import { Nav } from "react-bootstrap";

const Link = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <Nav.Link onClick={onClick} href={href}>
      {children}
    </Nav.Link>
  );
};

export default Link;
