import React, { useState } from "react"
import {
  Container,
  Grid,
  Collapse,
  Switch,
  FormControlLabel,
  Typography,
} from "@material-ui/core"
import GrokkingAlgos from "../images/grokkingalgos"
import GTD from "../images/gtd"
import PragProg from "../images/pragprog"
import LetsGo from "../images/lets_go"
import TDDGo from "../images/tdd_go"
import Scrum from "../images/scrum"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  description: {
    paddingLeft: "2%",
  },
}))
const ReadingList = () => {
  //TODO: create a Book component and an array of books that will be mapped over to prdouce read and reading books
  const classes = useStyles()
  const [booksRead, toggleBooksRead] = useState(false)
  return (
    <Container id="reading" className="site__section">
      <br />
      <Typography variant="h4" style={{ marginTop: "5%" }}>
        Reading List
      </Typography>{" "}
      <hr style={{ border: "1px solid #bababa" }} />
      <Grid container>
        <Grid item md={4}>
          <LetsGo />
        </Grid>
        <Grid item md={8} className={classes.description}>
          <Typography variant="h6">Let's Go </Typography>
          <p>
            My goal for September 2020 is to rebuild Estuary's backend in Go and
            this book will be a great help in that endeavour.
          </p>
          <strong>
            Buy other{" "}
            <a rel="noreferrer noopener" href="https://www.calhoun.io/">
              courses and resources by Jon Calhoun
            </a>
          </strong>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item md={4}>
          <PragProg />
        </Grid>
        <Grid item md={8} className={classes.description}>
          <Typography variant="h6">The Pragmatic Programmer </Typography>
          <p>
            It feels providential that I procrastinated on buying this book
            until the 20th anniversary update came out. Currently, I'm reading a
            little bit each day, letting their wisdom slowly take root in my
            practices as a developer.
          </p>
          <strong>
            Buy on{" "}
            <a
              rel="noreferrer noopener"
              href="https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition"
            >
              The Pragmatic Bookshelf
            </a>
          </strong>
        </Grid>
      </Grid>
      <br />
      <Grid align="start">
        <Grid item>
          <Typography variant="h5" style={{ marginTop: "5%" }}>
            Books I've Read
          </Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={booksRead}
                onChange={() => {
                  toggleBooksRead(!booksRead)
                }}
              />
            }
            label={booksRead ? "Collapse" : "Expand"}
          />
        </Grid>
      </Grid>
      <Collapse in={booksRead}>
        <hr style={{ border: "1px solid #bababa" }} />
        <div id="booksRead">
          <Grid container>
            <Grid item md={4}>
              <GTD />
            </Grid>
            <Grid item md={8} className={classes.description}>
              <Typography variant="h6">Getting Things Done </Typography>
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
              <strong>
                Buy on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563"
                >
                  Amazon
                </a>
              </strong>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item md={4}>
              <Scrum />
            </Grid>
            <Grid item md={8} className={classes.description}>
              <Typography variant="h6">
                Scrum: The Art of Doing Twice the Work in Half the Time{" "}
              </Typography>
              <p>
                I've never been at company that used Agile/Scrum and, as a
                result, have been able to see first-hand the issues that can
                arise from not following a system like this.
              </p>
              <p>
                {" "}
                Jeff Sutherland does not only an amazing job of explaining the
                "what" and "how" of Scrum, but also the "why". Through anecdotes
                and philosophical asides, he lays a foundation for why Scrum can
                and will help any team be more effective.{" "}
              </p>
              <p>
                It's very easy to read and is almost certainly worth reading
                multiple times. There are short summaries at the end of each
                chapter and an appendix for someone looking to implement Scrum
                for their team. It's an excellent book that anyone, but
                especially those working as developers, product managers, and
                project managers, should read.
              </p>
              <strong>
                Buy on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.amazon.com/gp/product/B00JI54HCU/ref=ppx_yo_dt_b_search_asin_title"
                >
                  Amazon
                </a>
              </strong>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item md={4}>
              <TDDGo />
            </Grid>
            <Grid item md={8} className={classes.description}>
              <Typography variant="h6">Learn Go with tests</Typography>
              <p>
                I believe both Golang and TDD are excelent tools for writing
                scalable, maintainable code so it made sense to improve my
                Golang skills while also getting into the habit of doing
                test-driven development.
              </p>
              <p>
                <strong>
                  Full Review on{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://dev.to/cpustejovsky/learn-go-with-tests-book-review-na4"
                  >
                    DEV.to
                  </a>
                </strong>
              </p>
              <p>
                <strong>
                  Read on{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://quii.gitbook.io/learn-go-with-tests/"
                  >
                    GitBook
                  </a>
                </strong>
              </p>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item md={4}>
              <GrokkingAlgos />
            </Grid>
            <Grid item md={8} className={classes.description}>
              <Typography variant="h6">Grokking Algorithms</Typography>
              <p>
                I love learning about computer science both because it's fun and
                to fill in the gaps that I likely have from not getting a
                computer science degree. Grokking Algorithms by Aditya Y.
                Bhargava was a great place to start that journey.
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
            </Grid>
          </Grid>
          <br />
        </div>
      </Collapse>
    </Container>
  )
}

export default ReadingList
