import React from "react"
import { Container, Button } from "@material-ui/core"
import FNV_EXP from "../images/fnv_exp"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url =
  "https://cpustejovsky.us18.list-manage.com/subscribe/post?u=5255bcd054238b51c87af4a7b&amp;id=aaa9023f7d"

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <div className="form-group">
      <input
        className="form-control"
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      {status === "sending" && (
        <div className="form-text" style={{ color: "blue" }}>
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="form-text"
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="form-text"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <br />
      <Button variant="contained" style={{backgroundColor: "green", color: "white"}} onClick={submit}>Submit</Button>
    </div>
  )
}

const HelpWanted = () => (
  <Container>
    <h2>Help Me Level Up!</h2>
    <FNV_EXP />
    <br></br>
    <p>
      I often think about how I would like to have more development experience.
      With all the time I spent playing RPGs, my reaction to that thought is
      “Okay, how can I increase my experience? How do I level up as a
      developer?”
    </p>
    <p>
      <strong>
        I can level up by doing the work, by building projects, and by
        contributing to open-source projects.
      </strong>
    </p>
    <p>
      I’m already building Estuary, a productivity app that’ll help me be a more
      effective developer and a more effective person. As I build Estuary, these
      questions arise:
    </p>
    <ul>
      <li>Did I choose a good solution for ___?</li>
      <li>Is the code readable? Is it maintainable?</li>
      <li>Is the user experience solid?</li>
    </ul>
    <p>
      <strong>This is where you can help.</strong>
    </p>
    <p>
      I’ll be writing a bi-weekly newsletter with updates and new features. If
      you’re willing to help me grow this app and level up as a developer, sign
      up to follow Estuary's progress.
    </p>
    <p>
      If you have developer experience, you can critique my code and offer
      recommendations.
    </p>
    <p>
      If you have experience with design, you can take a tour of my app and see
      what could make for better UX.
    </p>
    <a
      href="https://cpustejovsky-estuary.herokuapp.com/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button variant="contained" color="primary" style={{marginRight: "10px"}}>Estuary</Button>
    </a>
    <a
      href="https://github.com/cpustejovsky/estuary"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button variant="outlined" color="secondary">Source Code</Button>
    </a>
    <hr />
    <h3>Sign up to receive updates on Estuary</h3>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  </Container>
)

export default HelpWanted
