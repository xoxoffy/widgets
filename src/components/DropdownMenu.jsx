import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownMenu = ({ options, selected, setSelected }) => {
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <Dropdown.Item key={option.value} onClick={() => setSelected(option)}>
        {option.label}
      </Dropdown.Item>
    );
  });
  return (
    <div>
      <h1>Select a Color</h1>
      <DropdownButton id="dropdown-basic-button" title={selected.label}>
        {renderedOptions}
      </DropdownButton>
      <h1 style={{ color: selected.value }}>Color</h1>
    </div>
  );
};

export default DropdownMenu;
