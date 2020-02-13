import { Link } from "gatsby"
import React from "react"

const Navlink = ({ text, to, location }) => (
  <Link data-is-active={location.pathname === to} to={to} className="nav-link">
    {text}
  </Link>
)

export default Navlink
