import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <header>
      <nav className="navbar">
        <h1>BookStore CMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className="links">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <i className="fa fa-user" />
      </div>
    </header>
  );
}

export default Navbar;
