import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};

  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 20px;
    }

    span {
      display: none;
    }
  }
`

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <section>
          <Link className="nav-link" to="/">
            {' Home '}
          </Link>
          <Link className="nav-link" to="/articles">
            {' Articles '}
          </Link>
          <Link className="nav-link" to="/exploits">
            {' Exploits '}
          </Link>
          <Link className="nav-link" to="/about">
            {' About '}
          </Link>
        </section>
        <span>
          <UserLinks />
        </span>
      </NavContainer>
    )
  }
}

export default Navigation
