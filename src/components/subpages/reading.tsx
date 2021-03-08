import React, { useState } from "react"
import {
  Container,
  Collapse,
  Switch,
  FormControlLabel,
  Typography,
  Grid,
} from "@material-ui/core"
import books from "../lists/booklist"
import Book from "../Book"

type Books = JSX.Element[];

export default function ReadingList() {
  const [booksRead, toggleBooksRead] = useState<boolean>(false)
  const [booksRecurring, toggleBooksRecurring] = useState<boolean>(false)
  let alreadyRead: Books = [];
  let currentlyReading: Books = []
  let recurringReading: Books = []

  books.forEach(book => {
    const { Img, title, textArr, ctaArr, read, recurring } = book
    let bookComp: JSX.Element = (
      <Book Img={Img} title={title} textArr={textArr} ctaArr={ctaArr} />
    )
    recurring ? (recurringReading = [...recurringReading, bookComp]) :
      read
        ? (alreadyRead = [...alreadyRead, bookComp])
        : (currentlyReading = [...currentlyReading, bookComp])
  })
  return (
    <Container id="reading" className="site__section">
      <br />
      <Typography variant="h4" style={{ marginTop: "5%" }}>
        Reading List
      </Typography>{" "}
      <hr style={{ border: "1px solid #bababa" }} />
      {currentlyReading}
      <Grid>
        <Grid item>
          <Typography variant="h5" style={{ marginTop: "5%" }}>
            Recurring Reading
          </Typography>
        </Grid>
        <Grid item>
          <hr style={{ border: "1px solid #bababa" }} />

          {recurringReading}
        </Grid>
      </Grid>
      <Grid>
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
