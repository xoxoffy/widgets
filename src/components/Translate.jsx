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
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <div class="form-group">
          <h3>Enter text</h3>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </form>
      <DropdownMenu
        label="Select a language"
        selected={language}
        setSelected={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
