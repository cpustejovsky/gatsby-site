import React, { useState } from "react"
import {
  Container,
  Collapse,
  Switch,
  FormControlLabel,
  Typography,
  Grid,
} from "@material-ui/core"
import books from "../books"
import Book from "../Book"

const ReadingList = () => {
  const [booksRead, toggleBooksRead] = useState(false)
  let alreadyRead = []
  let currentlyReading = []

  books.forEach(book => {
    let bookComp = (
      <Book
        BookIMG={book.BookImg}
        title={book.title}
        textArr={book.textArr}
        ctaArr={book.ctaArr}
      />
    )
    if (book.read === true) {
      alreadyRead = [...alreadyRead, bookComp]
    }
    if (book.read === false) {
      currentlyReading = [...currentlyReading, bookComp]
    }
  })
  return (
    <Container id="reading" className="site__section">
      <br />
      <Typography variant="h4" style={{ marginTop: "5%" }}>
        Reading List
      </Typography>{" "}
      <hr style={{ border: "1px solid #bababa" }} />
      {currentlyReading}
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
        <div id="booksRead">{alreadyRead}</div>
      </Collapse>
    </Container>
  )
}

export default ReadingList
