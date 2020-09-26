import React from "react"
import { Slide, useScrollTrigger, CssBaseline } from "@material-ui/core/"
import NavBar from "./navbar"

const Header = props => {
  function HideOnScroll(props) {
    const trigger = useScrollTrigger()
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        <div>
          <NavBar />
        </div>
      </Slide>
    )
  }

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} />
    </>
  )
}

export default Header
