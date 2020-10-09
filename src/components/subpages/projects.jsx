import React, { useState } from "react"
import { Container, Grid, Collapse } from "@material-ui/core"
import BlogOriginal from "../images/blog_original"
import BlogRefresh from "../images/blog_refresh"
import BlogHeadlessCMS from "../images/blog_headless_cms"
import projects from "../lists/projectlist"
import Project from "../Project"
const Projects = () => {
  const [dynoWaker, openDynoWaker] = useState(false)
  const [gdpr, openGdpr] = useState(false)
  const [blog, openBlog] = useState(false)
  const [headlessCms, openHeadlessCms] = useState(false)
  const [lifeTogetherCalculator, openLifeTogetherCalculator] = useState(false)
  const renderProjects = () => projects.map(project => {
    const { name, title, languages, content, links } = project
    return (
      <Project
        name={name}
        title={title}
        languages={languages}
        content={content}
        links={links}
      />
    )
  })
  console.log(projects)
  return (
    <Container id="projects" className="site__section">
      <h1>Projects</h1>
      <p>
        Here is a growing list of projects I'm working on or have worked on in
        the past <strong>(click for details)</strong>
      </p>
      <hr />
      {renderProjects()}
      <div
        onClick={() => openLifeTogetherCalculator(!lifeTogetherCalculator)}
        aria-expanded={lifeTogetherCalculator}
        className="projects__collapse-header"
      >
        <h4>Life Together Calculator</h4>
        <p>(React/TypeScript)</p>
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
          <Grid container>
            <Grid item md={6} className="projects__section">
              <h3>Original</h3>
              <BlogOriginal />
            </Grid>
            <Grid item md={6} className="projects__section">
              <h3>CSS Redesign</h3>
              <BlogRefresh />
            </Grid>
          </Grid>
        </div>
      </Collapse>
      <div
        onClick={() => openHeadlessCms(!headlessCms)}
        className="projects__collapse-header"
      >
        <h4>BitPay Headless CMS</h4> <p>(Nuxt.js / Vue.js)</p>
      </div>
      <Collapse in={headlessCms}>
        <div>
          {" "}
          <Grid item md={12}>
            <p>
              I used Ghost's Content API to turn BitPay's blog into a headless
              CMS and add the blog to BitPay's Nuxt.js site.
            </p>
            <p>
              This created design consistency and allowed non-developers to make
              basic copy edits to BitPay's site without a full development
              process.
            </p>
          </Grid>
          <Grid item md={12} className="projects__section">
            <BlogHeadlessCMS />
          </Grid>
        </div>
      </Collapse>
      <div
        onClick={() => openDynoWaker(!dynoWaker)}
        aria-controls="dyno-waker"
        aria-expanded={dynoWaker}
        className="projects__collapse-header"
      >
        <h4>Dyno Waker</h4>
        <p>(NodeJS)</p>
      </div>
      <Collapse in={dynoWaker}>
        <div id="dyno-waker">
          <p>
            I created this to keep two of my Heroku dynos active from 6am to 9pm
            EST. I realized it might be useful for others who have a paid dyno
            and some free dynos, so I published it as a NPM module.
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer noopener"
                href="https://www.npmjs.com/package/cpustejovsky-dyno-waker"
              >
                NPM link
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
