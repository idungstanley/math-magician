import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavBar() {
  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: '| Calculator' },
    { id: 3, path: '/quote', text: '| Quote' },
  ];
  return (
    <header className="heading">
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>

  );
}

export default NavBar;
