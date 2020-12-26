import React from "react"
import { Grid } from "@material-ui/core"
import BlogOriginal from "../images/blog_original"
import BlogRefresh from "../images/blog_refresh"
import BlogHeadlessCMS from "../images/blog_headless_cms"

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
  current: boolean,
}



const twitterBot: Project = {
  name: "twitterBot",
  title: "Twitter Bot",
  languages: "Go",
  content: [`My first Go application, this Twitter bot gives me less
  reasons to check Twitter by sending me udpates from
  people I want to keep up with.`],
  links: [
    {
      text:
        "Code",
      link: "https://github.com/cpustejovsky/twitterbot",
    },
  ],
  current: true
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
  current: true
}

const lifeTogetherCalculator: Project = {
  name: "lifeTogetherCalculator",
  title: "Life Together Calculator",
  languages: "React/TypeScript",
  content: [
    <p>
      The first application I created which calculated how long my wife
      and I had known each other and showed what percentage of our lives
      that was. It gave me hands on experience with working with the DOM
      and JavaScript's Date Object.
  </p>,
    <p>
      I then made it interactive so anyone with a significant other can
      calculate their life together.
  </p>,
    <p>
      Most recently, I've rebuilt the app in React and allowed it to
      calculate any kind of frienship or personal relationship.
  </p>
  ],
  links: [
    {
      text:
        "Calculator",
      link: "https://life-together-calculator.herokuapp.com/",
    },
    {
      text:
        "Code",
      link: "https://github.com/cpustejovsky/life-together-calculator"
    },
  ],
  current: true
}

const blog: Project = {
  name: "twitterBot",
  title: "BitPay Blog Redesign",
  languages: "CSS/SASS",
  content: [`I forked Ghost's Casper theme and modified it with the help of an
  amazing marketing designer to give it a modern look.`, <Grid container>
      <Grid item md={6} className="projects__section">
        <h3>Original</h3>
        <BlogOriginal />
      </Grid>
      <Grid item md={6} className="projects__section">
        <h3>CSS Redesign</h3>
        <BlogRefresh />
      </Grid>
    </Grid>],
  links: [],
  current: false
}

const headlessCms: Project = {
  name: "headlessCms",
  title: "BitPay Headless CMS",
  languages: "Nuxt.js / Vue.js",
  content: [`I used Ghost's Content API to turn BitPay's blog into a headless
  CMS and add the blog to BitPay's Nuxt.js site.`, `This created design consistency and allowed non-developers to
  make basic copy edits to BitPay's site without a full
  development process.`, <Grid item md={12} className="projects__section">
      <BlogHeadlessCMS />
    </Grid>],
  links: [],
  current: false
}

const dynoWaker: Project = {
  name: "dynoWaker",
  title: "Dyno Waker",
  languages: "NodeJS",
  content: [`I created this to keep two of my Heroku dynos active from 6am to
  9pm EST. I realized it might be useful for others who have a paid
  dyno and some free dynos, so I published it as a NPM module.`],
  links: [
    {
      text:
        "NPM link",
      link: "https://www.npmjs.com/package/cpustejovsky-dyno-waker",
    },
  ],
  current: false
}


const gdprToggler: Project = {
  name: "gdprToggler",
  title: "GDPR Toggler",
  languages: "jQuery",
  content: [<p>
    Love it or hate it, GDPR is a reality for businesses so I created
    a jQuery script to dynamically display an opt-in option for
    countries where that option was required (I used this{" "}
    <a
      rel="noreferrer noopener"
      href="https://community.unbounce.com/t/how-to-use-geotargeting-to-display-a-visitors-location-on-a-page/5739"
    >
      AJAX script
    </a>{" "}
    to determine the country by IP address).{" "}
    <strong>
      This was my first real taste of working with jQuery.
    </strong>{" "}
    The scripts would need customization for the countries and for the
    specific assets that are being displayed or hidden.
  </p>],
  links: [
    {
      text:
        "Field Hiding Option",
      link: "https://github.com/cpustejovsky/learnedingJavaScript/blob/master/useful_scripts/fieldHider.html",
    },
    {
      text:
        "Radial Toggling Option",
      link: "https://github.com/cpustejovsky/learnedingJavaScript/blob/master/useful_scripts/radialToggler.html",
    },
    {
      text:
        "Landing Page This is Used On",
      link: "https://unbounce.bitpay.com/landing/blockchain-and-chargebacks-ebook/",
    },
  ],
  current: false
}

const projects: Project[] = [
  estuary,
  twitterBot,
  lifeTogetherCalculator,
  headlessCms,
  gdprToggler,
  dynoWaker,
  blog
  

]

export default projects