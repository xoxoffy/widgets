import Accordion from "./components/Accordion";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./components/Search";
import DropdownMenu from "./components/DropdownMenu";

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

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationBar />
        <Row>
          <Col>
            <DropdownMenu options={options} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
