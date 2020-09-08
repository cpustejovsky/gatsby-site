import React from "react"
import TDDGo from "./images/tdd_go"
import Scrum from "./images/scrum"
import GrokkingAlgos from "./images/grokkingalgos"
import GTD from "./images/gtd"
import PragProg from "./images/pragprog"
import LetsGo from "./images/lets_go"

type Book = {
  read: boolean,
  Img: () => JSX.Element,
  title: string,
  textArr: string[] | JSX.Element[],
  ctaArr: object[],
}

const letsGo: Book = {
  read: false,
  Img: () => <LetsGo />,
  title: "Let's Go",
  textArr: [
    <p>
      My goal for September 2020 is to rebuild Estuary's backend in Go and
      this book will be a great help in that endeavour.
    </p>,
  ],
  ctaArr: [
    {
      text: "Buy on Alex Edward's Website",
      link:
        "https://lets-go.alexedwards.net/",
    },
  ],
}
const pragProg: Book = {
  read: false,
  Img: () => <PragProg />,
  title: "The Pragmatic Programmer",
  textArr: [
    <p>
      It feels providential that I procrastinated on buying this book
      until the 20th anniversary update came out. Currently, I'm reading a
      little bit each day, letting their wisdom slowly take root in my
      practices as a developer.
    </p>,
  ],
  ctaArr: [
    {
      text: "Buy on the Pragmatic Bookshelf",
      link:
        "https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition",
    },
  ],
}
const gtd: Book = {
  read: true,
  Img: () => <GTD />,
  title: "Getting Things Done",
  textArr: [
    <p>
      I really love the system David Allen lays out in Getting Things Done.
      This system is what I am basing my productivity app{" "}
      <a
        rel="noreferrer noopener"
        href="https://cpustejovsky-estuary.herokuapp.com/"
      >
        Estuary
      </a>{" "}
      around.
    </p>,
  ],
  ctaArr: [
    {
      text: "Buy on Amazon",
      link:
        "https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563",
    },
  ],
}
const scrum: Book = {
  read: true,
  Img: () => <Scrum />,
  title: "Learn Go with tests",
  textArr: [
    "I've never been at company that used Agile/Scrum and, as a result, have been able to see first-hand the issues that can arise from not following a system like this.",
    'Jeff Sutherland does not only an amazing job of explaining the "what" and "how" of Scrum, but also the "why". Through anecdotes and philosophical asides, he lays a foundation for why Scrum can and will help any team be more effective.',
    "It's very easy to read and is almost certainly worth reading multiple times. There are short summaries at the end of each chapter and an appendix for someone looking to implement Scrum for their team. It's an excellent book that anyone, but especially those working as developers, product managers, and project managers, should read.",
  ],
  ctaArr: [
    {
      text: "Buy on Amazon",
      link:
        "https://www.amazon.com/gp/product/B00JI54HCU/ref=ppx_yo_dt_b_search_asin_title",
    },
  ],
}
const tddGo: Book = {
  read: true,
  Img: () => <TDDGo />,
  title: "Learn Go with tests",
  textArr: [
    "I believe both Golang and TDD are excelent tools for writing scalable, maintainable code so it made sense to improve my Golang skills while also getting into the habit of doing test-driven development.",
  ],
  ctaArr: [
    {
      text: "Full Review on DEV.to",
      link: "https://dev.to/cpustejovsky/learn-go-with-tests-book-review-na4",
    },
    {
      text: "Read on GitBook",
      link: "https://quii.gitbook.io/learn-go-with-tests/",
    },
  ],
}
const grokkingAlgos = {
  read: true,
  Img: () => <GrokkingAlgos />,
  title: "Grokking Algorithms",
  textArr: [
    "I love learning about computer science both because it's fun and to fill in the gaps that I likely have from not getting a computer science degree. Grokking Algorithms by Aditya Y. Bhargava was a great place to start that journey.",
  ],
  ctaArr: [
    {
      text: "Buy on Amazon",
      link:
        "https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230",
    },
  ],
}

const books: Book[] = [
  letsGo,
  tddGo,
  pragProg,
  scrum,
  grokkingAlgos,
  gtd,
]

export default books
