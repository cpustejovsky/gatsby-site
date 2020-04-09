import React, { useState } from "react"
import { Container, Row, Col, Collapse } from "react-bootstrap"
import BlogOriginal from "../images/blog_original"
import BlogRefresh from "../images/blog_refresh"
import BlogHeadlessCMS from "../images/blog_headless_cms"

const Projects = () => {
  const [estuary, openEstuary] = useState(false)
  const [bearsAndBearMarkets, openBearsAndBearMarkets] = useState(false)
  const [twitterBot, openTwitterBot] = useState(false)
  const [gdpr, openGdpr] = useState(false)
  const [signingApp, openSigningApp] = useState(false)
  const [blog, openBlog] = useState(false)
  const [headlessCms, openHeadlessCms] = useState(false)
  const [lifeTogetherCalculator, openLifeTogetherCalculator] = useState(false)
  return (
    <Container id="projects" className="site__section">
      <h1>Projects</h1>
      <p>
        The best way to learn is by doing and that means building things. One of
        my weaknesses is that I try to be a perfectionist and procrastinate.
        Thankfully, programming doesn't allow for that. I can't just read about
        JavaScript, React, or NodeJS, I have to build something to really learn
        it.
      </p>
      <strong>
        So here is a growing list of probjects I am working on (click for
        details)
      </strong>
      <hr />
      <div
        onClick={() => openEstuary(!estuary)}
        aria-controls="estuary"
        aria-expanded={estuary}
        className="projects__collapse-header"
      >
        <h4>Estuary</h4>
        <p>(NodeJS, MongoDB)</p>
      </div>
      <Collapse in={estuary}>
        <div id="estuary">
          <p>
            Estuary is a ME_N app that I built to record stream of consciousness
            writing and notes/to-dos. Here I put my NodeJS and MongoDB skills to
            the test. I've set up routes, built models and schemas, learned how
            to send emails and schedule cron jobs. I'm also setting up unit
            tests with Mocha and deploying with MongoDB Compass and Heroku.
          </p>
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
          </p>
          <p>
            That would have the dual benefit of cementing these practices for me
            and also building a robust app that I can proudly show off in my
            portfolio.
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://cpustejovsky-estuary.herokuapp.com/"
              >
                Estuary
              </a>
            </li>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://github.com/cpustejovsky/estuary"
              >
                Code
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
      <div
        onClick={() => openLifeTogetherCalculator(!lifeTogetherCalculator)}
        aria-expanded={lifeTogetherCalculator}
        className="projects__collapse-header"
      >
        <h4>Life Together Calculator</h4>
        <p>(ReactJS)</p>
      </div>
      <Collapse in={lifeTogetherCalculator}>
        <div>
          <p>
            The first application I created which calculated how long my wife
            and I had known each other and showed what percentage of our lives
            that was. It gave me hands on experience with working with the DOM
            and JavaScript's Date Object.
          </p>
          <p>
            I then made it interactive so anyone with a significant other can
            calculate their life together.
          </p>
          <p>
            Most recently, I've rebuilt the app in React and allowed it to
            calculate any kind of frienship or personal relationship.
          </p>
          <ul>
            <li>
              <a
                href="https://life-together-calculator.herokuapp.com/"
                rel="noreferrer noopener"
              >
                Calculator
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cpustejovsky/life-together-calculator"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
      <div
        onClick={() => openBearsAndBearMarkets(!bearsAndBearMarkets)}
        aria-expanded={lifeTogetherCalculator}
        className="projects__collapse-header"
      >
        <h4>Bears and Bear Markets</h4>
        <p>(ReactJS)</p>
      </div>
      <Collapse in={bearsAndBearMarkets}>
        <div>
          <p>
            At my previous company, people often wanted to see the current price
            of Bitcoin or some kind of financial news. I'd rather have a Panda
            livestream playing in the breakroom. To balance both these desires
            out, I thought of thia app which combines both things.
          </p>
          <p>
            This app is making use of{" "}
            <a
              href="https://polygon.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Polygon.io's
            </a>{" "}
            API along with Redux.
          </p>
          <ul>
            <li>
              <a
                href="https://bears-and-bear-markets.herokuapp.com/"
                rel="noreferrer noopener"
              >
                Bears and Bear Markets
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cpustejovsky/bears-and-bear-markets"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </li>
          </ul>
        </div>
      </Collapse>

      <div
        onClick={() => openBlog(!blog)}
        className="projects__collapse-header"
      >
        <h4>BitPay Blog Redesign</h4> <p>(CSS)</p>
      </div>
      <Collapse in={blog}>
        <div>
          <p>
            I forked Ghost's Casper theme and modified it with the help of an
            amazing marketing designer to give it a modern look.
          </p>
          <Row>
            <Col md={6} className="projects__section">
              <h3>Original</h3>
              <BlogOriginal />
            </Col>
            <Col md={6} className="projects__section">
              <h3>CSS Redesign</h3>
              <BlogRefresh />
            </Col>
          </Row>
        </div>
      </Collapse>
      <div
        onClick={() => openHeadlessCms(!headlessCms)}
        className="projects__collapse-header"
      >
        <h4>BitPay Headless CMS</h4> <p>(Nuxt.js)</p>
      </div>
      <Collapse in={headlessCms}>
        <div>
          {" "}
          <Col md={12}>
            <p>
              I used Ghost's Content API to turn BitPay's blog into a headless
              CMS and add the blog to BitPay's Nuxt.js site.
            </p>
            <p>
              This created design consistency and allowed non-developers to make
              basic copy edits to BitPay's site without a full development
              process.
            </p>
          </Col>
          <Col md={12} className="projects__section">
            <BlogHeadlessCMS />
          </Col>
        </div>
      </Collapse>
      <div
        onClick={() => openTwitterBot(!twitterBot)}
        aria-controls="twitter-bot"
        aria-expanded={twitterBot}
        className="projects__collapse-header"
      >
        <h4>Twitter Bot</h4>
        <p>(NodeJS)</p>
      </div>
      <Collapse in={twitterBot}>
        <div id="twitter-bot">
          <p>
            I spend too much time on Twitter so to minimize that time while
            keeping up with the people and organizations I want to, I started
            work on a twitter bot. I've published it as an NPM module which is
            running on this site and sends me an email at 6:00 AM EST everyday
            with the tweets I want, having already liked them and providing me
            the option to retweet and reply via a link.
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://www.npmjs.com/package/cpustejovsky-twitter-bot"
              >
                NPM link
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
      <div
        onClick={() => openSigningApp(!signingApp)}
        aria-expanded={signingApp}
        className="projects__collapse-header"
      >
        <h4>Public/Private Key Signing App</h4>
        <p>(NodeJS)</p>
      </div>
      <Collapse in={signingApp}>
        <div>
          <p>
            Application I worked on to better understand cryptography and
            asynchronous code.{" "}
            <strong>
              This probject helped me get a better understanding of NodeJS's
              Crypto module.
            </strong>{" "}
            It should go without saying, but{" "}
            <strong>
              do not use this! I'm rolling my own cryptography here for learning
              purposes only.
            </strong>
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://github.com/cpustejovsky/CharlesPustejovsky-2019-v2"
              >
                Code
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
      <div
        onClick={() => openGdpr(!gdpr)}
        aria-expanded={gdpr}
        className="projects__collapse-header"
      >
        <h4>GDPR Toggler</h4>
        <p>(jQuery)</p>
      </div>
      <Collapse in={gdpr}>
        <div>
          <p>
            Love it or hate it, GDPR is a reality for businesses so I created a
            jQuery script to dynamically display an opt-in option for countries
            where that option was required (I used this{" "}
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
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://github.com/cpustejovsky/learnedingJavaScript/blob/master/useful_scripts/fieldHider.html"
              >
                Field Hiding Option
              </a>
            </li>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://github.com/cpustejovsky/learnedingJavaScript/blob/master/useful_scripts/radialToggler.html"
              >
                Radial Toggling Option
              </a>
            </li>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://unbounce.bitpay.com/landing/blockchain-and-chargebacks-ebook/"
              >
                Landing Page This is Used On
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
    </Container>
  )
}

export default Projects
