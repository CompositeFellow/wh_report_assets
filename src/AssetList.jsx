import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #363f35;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
`;

const AssetSelector = styled.div`
  width: 50%;
  margin-top: 2em;
  min-height: 30px;
  background-color: #371c50;
  color: white;
`;

const AssetList = ({ children }) => {
  return (
    <Container>
      <AssetSelector />
      {children}
    </Container>
  );
};

export default AssetList;
