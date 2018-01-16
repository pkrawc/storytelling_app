import React, { Component } from "react"
import { Redirect, Switch, Route, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled from "styled-components"

import Tabs from "./Tabs"
import Collections from "./Collections"

const Wrapper = styled.div`
  color: #f9f9f9;
  h2 {
    font-size: 1.5em;
    line-height: 1.2;
    font-weight: 900;
  }
  h2,
  .collection-description {
    margin: 1rem 1rem 0;
  }
  .collection-description {
    font-size: 0.9em;
    font-weight: 300;
    width: 66vw;
  }
`

export const RouteWrapper = styled.div`
  &.fade-enter {
    opacity: 0.01;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: 300ms ease-in-out;
  }
  &.fade-exit {
    opacity: 0;
  }
`

class App extends Component {
  state = {
    collections: [
      {
        title: "Scary Reads",
        count: 92,
        illustration: "https://url.com",
        colorOne: "#fff3a8",
        colorTwo: "#ffa4bf"
      },
      {
        title: "Essential Sci Fi",
        count: 121,
        illustration: "https://url.com",
        colorOne: "#00DBDE",
        colorTwo: "#FC00FF"
      },
      {
        title: "Top Mystery",
        count: 42,
        illustration: "https://url.com",
        colorOne: "#8BC6EC",
        colorTwo: "#9599E2"
      },
      {
        title: "Addictive Thrillers",
        count: 70,
        illustration: "https://url.com",
        colorOne: "#85FFBD",
        colorTwo: "#FFFB7D"
      }
    ],
    errors: {
      isErrored: false,
      error: []
    }
  }
  componentDidCatch(err) {
    this.setState({ errors: { isErrored: true, error: err } })
  }
  render() {
    const locationKey = this.props.location.pathname.split("/")[1]
    return this.state.errors.isErrored ? (
      <h1>we've errored</h1>
    ) : (
      <Wrapper>
        <TransitionGroup>
          <CSSTransition
            key={locationKey}
            classNames="fade"
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
            transitionLeave={false}
          >
            <RouteWrapper key={locationKey}>
              <Switch location={this.props.location}>
                <Route
                  path="/collections"
                  render={({ match }) => (
                    <Collections collections={this.state.collections} />
                  )}
                />
                <Route
                  path="/bookmarks"
                  render={({ match }) => (
                    <RouteWrapper>
                      <h1>bookmarks</h1>
                    </RouteWrapper>
                  )}
                />
                <Route
                  path="/reading"
                  render={({ match }) => (
                    <RouteWrapper>
                      <h1>reading</h1>
                    </RouteWrapper>
                  )}
                />
                <Route
                  path="/messages"
                  render={({ match }) => (
                    <RouteWrapper>
                      <h1>messages</h1>
                    </RouteWrapper>
                  )}
                />
                <Route
                  path="/profile"
                  render={({ match }) => (
                    <RouteWrapper>
                      <h1>profile</h1>
                    </RouteWrapper>
                  )}
                />
                <Redirect to="/collections" />
              </Switch>
            </RouteWrapper>
          </CSSTransition>
        </TransitionGroup>
        <Tabs />
      </Wrapper>
    )
  }
}

export default withRouter(App)
