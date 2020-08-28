import React from "react"
import PropTypes from "prop-types"
import MenuIcon from "@material-ui/icons/Menu"
import {
  Link,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
} from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexFlow: "row nowrap",
    [theme.breakpoints.up("md")]: {
      color: "white",
      "& a": {
        color: "white",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column nowrap",
    },
  },
  menuItems: {
    display: "flex",
    flexflow: "row nowrap",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column nowrap",
    },
  },
  menuItemsRight: {
    display: "flex",
    flexFlow: "row nowrap",
  },
}))

const Header = ({ show }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const renderMenu = (mobile = false) => {
    if (show) {
      return (
        <div className={classes.menu}>
          <div className={classes.menuItems}>
            <MenuItem component={Link} href="#about" onClick={handleClose}>
              About Me
            </MenuItem>
            <MenuItem component={Link} href="#projects" onClick={handleClose}>
              Projects
            </MenuItem>
            <MenuItem component={Link} href="#reading" onClick={handleClose}>
              Reading List
            </MenuItem>
            <MenuItem component={Link} href="/resources" onClick={handleClose}>
              Resources
            </MenuItem>
          </div>
          <div className={classes.menuItemsRight}>
            <MenuItem component={Link} href="https://github.com/cpustejovsky">
              <i className="fab fa-github"></i>
            </MenuItem>
            <MenuItem
              component={Link}
              href="https://www.linkedin.com/in/cpustejovsky/"
            >
              <i className="fab fa-linkedin"></i>
            </MenuItem>
            <MenuItem component={Link} href="https://twitter.com/CCPustejovsky">
              <i className="fab fa-twitter-square"></i>
            </MenuItem>
            <MenuItem component={Link} href="https://dev.to/cpustejovsky">
              <i className="fab fa-dev"></i>
            </MenuItem>
            <MenuItem component={Link} href="mailto:charles@cpustejovsky.com">
              <i className="far fa-envelope"></i>
            </MenuItem>
          </div>
          {mobile ? <hr /> : null}
        </div>
      )
    }
  }
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
              justifySelf: "center",
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            cpustejovsky{" "}
            <i style={{ marginLeft: "5px" }} className="far fa-thumbs-up"></i>
          </Typography>
          <Hidden mdUp>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton color="inherit" aria-label="menu">
                <MenuIcon aria-haspopup="true" onClick={handleClick} />
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {renderMenu()}
                </Menu>
              </IconButton>
            </div>
          </Hidden>
          <Hidden smDown className={classes.menuContainer}>
            {renderMenu()}
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
