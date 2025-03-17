import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode; // ✅ Accept children
  className?: string; // ✅ Allow external styles
}

const NavButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="btn">{children}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 0.75em 1.5em; /* ✅ Adjusted padding for better spacing */
    color: black; /* ✅ Default text color */
    text-transform: uppercase;
    font-weight: 600; /* ✅ Matches previous font weight */
    letter-spacing: 0.5px; /* ✅ Adds a little spacing */
    position: relative;
    transition: color 0.4s ease;
    cursor: pointer;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: #f39e2f; /* ✅ Matches previous navbar highlight */
    transition: width 0.4s ease;
  }

  .btn:hover {
    color: #1e1e2b;
    transition-delay: 0.2s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #f39e2f;
    transition: height 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.2s;
  }
`;

export default NavButton;
