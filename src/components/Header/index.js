import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Nav>
      <Link to="/Home">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/Exit">
        <FaSignInAlt size={24} />
      </Link>
      <button
        onClick={() => {
          navigate(-1, { state: {}, replace: false });
        }}
        type="button"
      >
        Go back
      </button>
      <button
        onClick={() => {
          navigate('/Exit', { state: {}, replace: true });
        }}
        type="button"
      >
        Exit
      </button>
    </Nav>
  );
}
