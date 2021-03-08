import React from "react"
import TDDGo from "../images/tdd_go"
import Scrum from "../images/scrum"
import GrokkingAlgos from "../images/grokkingalgos"
import GTD from "../images/gtd"
import PragProg from "../images/pragprog"
import DesertFathersImg from "../images/desertfathers"
import LetsGo from "../images/lets_go"
import GoBook from "../images/gobook"
import ConcurrencyInGo from "../images/concurrency_in_go"

type CTA = {
  text: string,
  link: string
}

type Book = {
  read: boolean,
  recurring: boolean,
  Img: () => JSX.Element,
  title: string,
  textArr: (string | JSX.Element)[],
  ctaArr: CTA[],
}

const concurrencyGo: Book = {
  read: true,
  recurring: false,
  Img: () => <ConcurrencyInGo />,
  title: "Concurrency in Go",
  textArr: [
    <p>
      Go is my favorite language for many reasons, but chief is how it handles concurrency. Given that, I thought it wise to dive deeper into that.
    </p>,
    <p>
      Katherine Cox-Buday has written an amazing introduction into Go's concurrency primitives (goroutines and channels), libraries (<code>sync</code> and <code>context</code>), and best practices.
    </p>,
    <p>This is definitely a book I'll be rereading in the future.</p>
  ],
  ctaArr: [
    {
      text: "Check it out on O'Reilly Media",
      link:
        "https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/",
    },
  ],
}
const goBook: Book = {
  read: false,
  recurring: false,
  Img: () => <GoBook />,
  title: "The Go Programming Language",
  textArr: [
    <p>
      I'm going through this book and will be finishing it around the end of Hacktoberfest.
    </p>,
    <p>
      Brian Kernighan has already written [one classic programming book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628), so I believe I'm in good hands
    </p>
  ],
  ctaArr: [
    {
      text: "Visit the Book's Site",
      link:
        "https://www.gopl.io/",
    },
  ],
}
const letsGo: Book = {
  read: true,
  recurring: false,
  Img: () => <LetsGo />,
  title: "Let's Go",
  textArr: [
    <p>
      This book is absolutely wonderful for any newcomer to Go wanting to dive into web development.
    </p>,
    <p>
      Alex Edwards shows you how to build scalable, composable, maintainable backends with Go.
    </p>
  ],
  ctaArr: [
    {
      text: "Full Review on DEV.to",
      link: "https://dev.to/cpustejovsky/let-s-go-book-review-1909"
    },
    {
      text: "Buy on Alex Edward's Website",
      link:
        "https://lets-go.alexedwards.net/",
    },
  ],
}
const pragProg: Book = {
  read: true,
  recurring: true,
  Img: () => <PragProg />,
  title: "The Pragmatic Programmer",
  textArr: [
    <p>
      This book is filled with wisdom and best practices that any programmer can use to improve their craft and better provide value with the software they help create. Now that I've finished reading it, I'm slowly going back throught it to really grok its lessons.
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
const DesertFathers: Book = {
  read: true,
  recurring: true,
  Img: () => <DesertFathersImg />,
  title: "The Alphabetical Sayings of the Desert Fathers",
  textArr: [
    <p>
      The Desert Fathers of Christianity hold a special place in my heart. Their lessons of self-discipline, humility, perserverance, and not judging others help me not only as a developer, but as a human being. It is why I read some of their sayings at the beginning of each day, to center and focus me for the day ahead, with all the challenges it may bring.
    </p>,
  ],
  ctaArr: [
    {
      text: "Buy on Amazon",
      link:
        "https://amazon.com/Sayings-Desert-Fathers-Alphabetical-Collection/dp/0879079592",
    },
  ],
}
const gtd: Book = {
  read: true,
  recurring: false,
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
  recurring: false,
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
  recurring: false,
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
  recurring: false,
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
  concurrencyGo,
  goBook,
  letsGo,
  tddGo,
  pragProg,
  DesertFathers,
  scrum,
  grokkingAlgos,
  gtd,
]

export default books
