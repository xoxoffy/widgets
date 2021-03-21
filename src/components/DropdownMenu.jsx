import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownMenu = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return <Dropdown.Item key={option.value}>{option.label}</Dropdown.Item>;
  });
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Select color">
        {renderedOptions}
      </DropdownButton>
    </div>
  );
};

export default DropdownMenu;
