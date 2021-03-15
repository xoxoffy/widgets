import React, { useState, useEffect } from "react";
import { Form, Badge, Row, Container } from "react-bootstrap";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log("I RUN WITH EVERY RENDER");

  useEffect(() => {
    //we need to declare a helper function inside useEffect
    //and then invoke it to not get an error
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    //if term has characters inside of it - do a search
    //for the purpuses of term state not bugging out
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div>
            <h2>{result.title}</h2>
          </div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          <br></br>
          <Container>
            <Row>
              <Badge>
                <h4>
                  <a
                    className="content-button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                  >
                    Read more
                  </a>
                </h4>
              </Badge>
            </Row>
          </Container>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>Enter search term</h1>
          </Form.Label>
          <Form.Control
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Group>
        <div>{renderedResults}</div>
      </Form>
    </div>
  );
};

export default Search;
