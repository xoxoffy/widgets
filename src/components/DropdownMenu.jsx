import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownMenu = ({ options, selectedColor, setSelectedChangeColor }) => {
  const renderedOptions = options.map((option) => {
    if (option.value === selectedColor.value) {
      return null;
    }

    return (
      <Dropdown.Item
        key={option.value}
        onClick={() => setSelectedChangeColor(option)}
      >
        {option.label}
      </Dropdown.Item>
    );
  });
  return (
    <div>
      <h1>Select a Color</h1>
      <DropdownButton id="dropdown-basic-button" title={selectedColor.label}>
        {renderedOptions}
      </DropdownButton>
    </div>
  );
};

export default DropdownMenu;
