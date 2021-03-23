import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <DropdownMenu
        selected={language}
        setSelected={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
