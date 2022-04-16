import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 5%;
  /* background-color: #f0f0f3; */
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 1em;
`;

const AssetTitle = styled.h3`
  font-size: 2em;
  color: black;
  margin-top: 0.25em;
  margin-bottom: 1em;
`;

const Asset = ({ children, title }) => {
  return (
    <Container>
      <AssetTitle title={title}>{title}</AssetTitle>
      {children}
    </Container>
  );
};

export default Asset;
