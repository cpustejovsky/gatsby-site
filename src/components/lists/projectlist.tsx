import React from "react"

type Links = {
  text: string,
  link: string
}

type Project = {
  name: string,
  title: string,
  languages: string,
  content: (string | JSX.Element)[],
  links: Links[],
}



const twitterBot: Project = {
  name: "twitterBot",
  title: "Twitter Bot",
  languages: "Go",
  content: [`My first Go application, this Twitter bot is design to give me less
  reasons to spend check on Twitter by sending me Twitter udpates from
  users I want to keep up with.`],
  links: [
    {
      text:
        "Twitter Bot (It's uaully asleep unless I hit a specific route on it)",
      link: "https://cpustejovsky-go-twitter-bot.herokuapp.com/",
    },
  ],
}

const estuary: Project = {
  name: "estuary",
  title: "Estuary",
  languages: "React/TypeScript, Go, PostgreSQL",
  content: [
    <p>
      During Thanksgiving weekend 2019, I started reading{" "}
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563"
      >
        Getting Things Done by David Allen
      </a>{" "}
      and had the idea to turn Estuary into a MERN app that could
      facilitate the GTD process.
    </p>,
      <p>
        That would have the dual benefit of cementing these practices for me
        and also building a robust app that I can proudly show off in my
        portfolio.
    </p>,
      <p>
        I'm currently rebuilding the client in TypeScript, the server in Go,
        and the database in PostgreSQL.
    </p>
  ],
  links: [
    {
      text:
        "Go Server Refactor (WIP)",
      link: "https://github.com/cpustejovsky/estuary",
    },
    {
      text:
        "TypeScript Client Refactor (WIP)",
      link: "https://github.com/cpustejovsky/estuary-client",
    },
    {
      text:
        "https://www.estuaryapp.com/",
      link: "Estuary App",
    },
    {
      text:
        "Original NodeJS App Code",
      link: "https://github.com/cpustejovsky/estuary-node",
    },
  ],
}


const projects: Project[] = [
  twitterBot,
  estuary
]

export default projects