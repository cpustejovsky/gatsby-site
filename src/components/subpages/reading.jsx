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
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  description: {
    paddingLeft: "2%",
  },
}))
const ReadingList = () => {
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
          <PragProg />
        </Grid>
        <Grid item md={8} className={classes.description}>
          <Typography variant="h6">The Pragmatic Programmer </Typography>
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
              <p>
                Buy on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563"
                >
                  Amazon
                </a>
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
