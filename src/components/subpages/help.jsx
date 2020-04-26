import React from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import FNV_EXP from "../images/fnv_exp"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url =
  "https://cpustejovsky.us18.list-manage.com/subscribe/post?u=5255bcd054238b51c87af4a7b&amp;id=aaa9023f7d"

const submitData = event => {
  alert(event.target.value)
  event.preventDefault()
}
const SimpleForm = () => <MailchimpSubscribe url={url} />

// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe }) => (
//       <div>
//         <h4>Subscribe for Updates on Estuary</h4>
//         <Form onSubmitted={e => submitData(e)}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     )}
//   />
// )

const CustomForm = ({ status, message, onValidated }) => {
  let email, name
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
      <Button onClick={submit}>Submit</Button>
    </div>
  )
}

const HelpWanted = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h2>Help Me Level Up my Development</h2>
        <FNV_EXP />
        <br></br>
        <p>
          Since I started looking for a development job, the main feedback I’ve
          received from the places I’ve applied to is that I don’t have the
          amount of experience they are looking for.
        </p>
        <p>
          Maybe it’s all the time I’ve spent playing RPGs, but whenever I see
          that reply, I think “Okay, now how do I make my experience go up? How
          do I level up as a developer?”
        </p>
        <p>
          <strong>
            {" "}
            I’m only going to level up by doing the work. By building projects.
            By contributing to larger projects. By learning more about the
            technologies I’m using and their underlying principles.
          </strong>
        </p>
        <p>
          I can build an app. I can make it work. However, because I care about
          writing quality code, questions arise:
        </p>
        <ul>
          <li>Did I choose a good solution?</li>
          <li>Is the code elegant?</li>
          <li>Is it readable?</li>
          <li>Is it maintainable?</li>
          <li>Is the user experience solid?</li>
        </ul>
        <p>
          <strong>This is where you can help, if you’re willing.</strong>
        </p>
        <p>
          If you have experience with CSS, React, NodeJS, or MongoDB, you can
          check out my{" "}
          <a
            href="https://github.com/cpustejovsky/estuary"
            target="_blank"
            rel="noreferrer noopener"
          >
            source code
          </a>{" "}
          and offer any recommendations or critiques.
        </p>
        <p>
          If you have experience with design, you can take a tour of my app and
          see what could make for better UX.
        </p>
        <p>
          If you’re just an everyday person with no technical skills, great!
          That’s who I’m likely to be building apps for professionally so your
          thoughts are the most invaluable of all!
        </p>
        <p>
          The app in question is{" "}
          <a
            href="https://cpustejovsky-estuary.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Estuary
          </a>
          , a note taking app that I’m rebuilding into a productivity app
          that’ll help me be a more effective developer and a more effective
          person.
        </p>
        <hr />
        <h3>Sign up to follow Estuary's progress</h3>
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
      </Col>
    </Row>
  </Container>
)

export default HelpWanted
