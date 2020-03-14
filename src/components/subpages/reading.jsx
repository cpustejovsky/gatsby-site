import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import GrokkingAlgos from "../images/grokkingalgos"
import GTD from "../images/gtd"
import PragProg from "../images/pragprog"
const ReadingList = () => (
  <Container id="reading" className="site__section">
    <br />
    <h1>Reading List</h1>
    <hr />
    <Row>
      <Col md={4}>
        <GTD />
      </Col>
      <Col md={8}>
        <h4>Getting Things Done</h4>
        <p>
          I really jive with the system that David Allen laid out and it's the
          system that I am rebuilding{" "}
          <a rel="noreferrer noopener" href="https://cpustejovsky-estuary.herokuapp.com/">Estuary</a>{" "}
          around.
        </p>
        <p>
          Buy on <a rel="noreferrer noopener" href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563">Amazon</a>
        </p>
      </Col>
    </Row>
    <hr style={{ border: "1px solid #bababa" }} />
    <Row>
      <Col md={4}>
        <PragProg />
      </Col>
      <Col md={8}>
        <h4>The Pragmatic Programmer</h4>
        <p>
          It feels providential that I procrastinated on buying this book until
          the 20th anniversary update came out. I'm looking forward to going
          through the advice David Thomas and Andrew Hunt have to offer.
        </p>
        <p>
          Buy on <a rel="noreferrer noopener" href="https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition">The Pragmatic Bookshelf</a>
        </p>
      </Col>
    </Row>
    <hr style={{ border: "1px solid #bababa" }} />
    <Row>
      <Col md={4}>
        <GrokkingAlgos />
      </Col>
      <Col md={8}>
        <h4>Grokking Algorithms</h4>
        <p>
          One of my long-term goals is to slowly learn the concepts and ideas I
          would have in a traditional computer science course at a university.
          Grokking Algorithms by Aditya Y. Bhargava is a great place to start
          that journey.
        </p>
        <p>
          Buy on <a rel="noreferrer noopener" href="https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230">Amazon</a>
        </p>
      </Col>
    </Row>
  </Container>
)

export default ReadingList
