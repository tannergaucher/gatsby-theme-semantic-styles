import { Navlink } from "."
import React from "react"

const Navlinks = ({ location }) => (
  <nav className="nav">
    <Navlink text="Page One" to="/" location={location} />
    <Navlink text="Page Two" to="/page-two" location={location} />
  </nav>
)

export default Navlinks
