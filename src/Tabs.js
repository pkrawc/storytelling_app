import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0.75em;
  background: #f9f9f9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const Tab = styled.li`
  font-size: 1.25em;
  &:not(:last-of-type) {
    margin-right: 1em;
  }
  a {
    color: #d9d9d9;
    transition: 200ms;
  }
  .active {
    color: #c88eff;
  }
`

export default props => (
  <Wrapper>
    <Tab>
      <NavLink to="/collections" activeClassName="active">
        <span className="mdi mdi-compass" />
      </NavLink>
    </Tab>
    <Tab>
      <NavLink to="/bookmarks" activeClassName="active">
        <span className="mdi mdi-book" />
      </NavLink>
    </Tab>
    <Tab>
      <NavLink to="/reading" activeClassName="active">
        <span className="mdi mdi-book-open-variant" />
      </NavLink>
    </Tab>
    <Tab>
      <NavLink to="/messages" activeClassName="active">
        <span className="mdi mdi-email-open" />
      </NavLink>
    </Tab>
    <Tab>
      <NavLink to="/profile" activeClassName="active">
        <span className="mdi mdi-account-location" />
      </NavLink>
    </Tab>
  </Wrapper>
)
