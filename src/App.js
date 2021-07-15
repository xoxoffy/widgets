import Accordion from "./components/Accordion";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./components/Search";
import DropdownMenu from "./components/DropdownMenu";
import { useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";

const items = [
  {
    key: 1,
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    key: 2,
    title: "Why use react",
    content: "React is a favourite JS library among engineers",
  },
  {
    key: 3,
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
      <Container>
        <NavigationBar />
        <Row>
          <Col>
            <Route path="/">
              <Accordion items={items} />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/dropdown">
              <DropdownMenu
                label="Select a color"
                options={options}
                selected={selected}
                setSelected={setSelected}
              />
            </Route>
            <Route path="/translate">
              <Translate />
            </Route>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
