import Accordion from "./components/Accordion";
import CNav from "./components/CNav";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./components/Search";

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

function App() {
  return (
    <div className="App">
      <Container>
        <CNav />
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
