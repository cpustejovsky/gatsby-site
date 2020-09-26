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

type Books = JSX.Element[];

export default function ReadingList (){
  const [booksRead, toggleBooksRead] = useState<boolean>(false)
  let alreadyRead: Books = [];
  let currentlyReading: Books = []

  books.forEach(book => {
    const { Img, title, textArr, ctaArr, read } = book
    let bookComp: JSX.Element = (
      <Book Img={Img} title={title} textArr={textArr} ctaArr={ctaArr} />
    )
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
