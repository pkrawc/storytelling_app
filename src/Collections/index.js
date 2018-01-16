import React from "react"
import styled from "styled-components"

import { RouteWrapper } from "../App"

const CollectionsList = styled.ul`
  display: flex;
  padding: 1em 1em 2em;
  list-style: none;
  overflow-x: auto;
  .empty {
    padding: 1px;
  }
`

const CollectionCard = styled.li`
  flex: 1 0 66vw;
  max-width: 15em;
  padding: 1em;
  border-radius: 8px;
  background-color: ${({ colorOne }) => colorOne};
  background-image: ${({ colorOne, colorTwo }) =>
    `linear-gradient(75deg, ${colorOne} 0%, ${colorTwo} 100%)`};
  box-shadow: 0 12px 36px -12px rgba(57, 45, 68, 0.48);
  text-align: center;
  &:not(:last-of-type) {
    margin-right: 1em;
  }
  .title {
    margin-bottom: 0;
    font-weight: 900;
    font-size: 1.5em;
  }
  .illustration {
    min-height: 7.5rem;
  }
`

export default props => (
  <RouteWrapper>
    <h2>
      Trending<br />Collections
    </h2>
    <p className="collection-description">
      Kogi Cosby sweater ethical squid disrupt. organic tote bag giu.
    </p>
    <CollectionsList>
      {props.collections.map(({ title, count, url, colorOne, colorTwo }) => (
        <CollectionCard key={title} colorOne={colorOne} colorTwo={colorTwo}>
          <p className="title">{title}</p>
          <p className="story-count">{count} Stories</p>
          <div className="illustration" url={url} />
        </CollectionCard>
      ))}
      <li className="empty" />
    </CollectionsList>
  </RouteWrapper>
)
