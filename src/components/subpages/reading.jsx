import React, { useState } from "react"
import { Container, Row, Col, Collapse, Button } from "react-bootstrap"
import GrokkingAlgos from "../images/grokkingalgos"
import GTD from "../images/gtd"
import PragProg from "../images/pragprog"

const ReadingList = () => {
  const [booksRead, toggleBooksRead] = useState(false)
  return (
    <Container id="reading" className="site__section">
      <br />
      <h1>Reading List</h1>
      <hr style={{ border: "1px solid #bababa" }} />
      <Row>
        <Col md={4}>
          <PragProg />
        </Col>
        <Col md={8}>
          <h4>The Pragmatic Programmer</h4>
          <p>
            It feels providential that I procrastinated on buying this book
            until the 20th anniversary update came out. I'm looking forward to
            going through the advice David Thomas and Andrew Hunt have to offer.
          </p>
          <p>
            Buy on{" "}
            <a
              rel="noreferrer noopener"
              href="https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition"
            >
              The Pragmatic Bookshelf
            </a>
          </p>
        </Col>
      </Row>
      <br />
      <div
        onClick={() => toggleBooksRead(!booksRead)}
        aria-controls="booksRead"
        aria-expanded={booksRead}
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
        }}
      >
        <h1>Books I've Read</h1>
        <Button size="sm" variant={booksRead ? "warning" : "primary"}>
          {booksRead ? "Collapse" : "Expand"}
        </Button>
      </div>
      <hr style={{ border: "1px solid #bababa" }} />
      <Collapse in={booksRead}>
        <div id="booksRead">
          <Row>
            <Col md={4}>
              <GTD />
            </Col>
            <Col md={8}>
              <h4>Getting Things Done</h4>
              <p>
                I really love the system David Allen lays out in Getting Things
                Done. This system is what I am basing my productivity app{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://cpustejovsky-estuary.herokuapp.com/"
                >
                  Estuary
                </a>{" "}
                around.
              </p>
              <p>
                Buy on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563"
                >
                  Amazon
                </a>
              </p>
            </Col>
          </Row>
          {/* <hr style={{ border: "1px solid #bababa" }} /> */}
          <br />
          <Row>
            <Col md={4}>
              <GrokkingAlgos />
            </Col>
            <Col md={8}>
              <h4>Grokking Algorithms</h4>
              <p>
                I love learning about computer science both because it's fun and
                to fill in the gaps that I likely have from not getting a computer science degree. Grokking Algorithms by Aditya
                Y. Bhargava was a great place to start that journey.
              </p>
              <p>
                Buy on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230"
                >
                  Amazon
                </a>
              </p>
            </Col>
          </Row>
          <br/>
        </div>
      </Collapse>
    </Container>
  )
}

export default ReadingList
