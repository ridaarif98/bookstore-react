import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const links = [
        {
          id: 1,
          path: "/",
          text: "Books",
        },
        {
          id: 2,
          path: "/categories",
          text: "Categories",
        },
    ]
    return (
      <nav className="navbar">
        <ul>
          {links.map(link => {
          return <li key={link.id}><Link to={link.path} className="links">{link.text}</Link></li>
          })}
        </ul>
      </nav>
    );

};

export default Navbar;