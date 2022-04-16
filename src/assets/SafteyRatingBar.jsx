import React from "react";
import styled from "styled-components";
import Asset from "../Asset";
import colors from "../colors";

const Container = styled.div`
  width: 75%;
  padding: 0.5em;
  border-radius: 0.5em;
  background: #e0e0e0;
  box-shadow: inset -0.3em -0.3em 0.5em #5a5a5a, inset 0.3em 0.3em 0.5em #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bar = styled.div`
  width: 80%;
  min-height: 3em;
  margin-top: 0.25em;
  border-radius: 1em;
  background: ${colors.whiteHat.neomorphWhite};
  box-shadow: inset 0.25em 0.25em 0.5em #5a5a5a,
    inset -0.25em -0.25em 0.5em #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  background: rgb(236, 202, 223);
  background: linear-gradient(
    45deg,
    rgba(236, 202, 223, 1) 0%,
    rgba(240, 240, 243, 1) 50%,
    rgba(176, 190, 219, 1) 100%
  );
`;

const IndicatorBar = styled.div`
  width: 75%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
`;

const IndicatorSpacer = styled.div`
  width: 70%;
`;

const Indicator = styled.div`
  width: 2em;
  min-height: 20px;
  z-index: 10;
`;

const IndicatorBox = styled.div`
  position: relative;
  left: -1em;
  height: 3em;
  width: 2em;
  background-color: black;
`;

const IndicatorLine = styled.div`
  width: 0.1em;
  height: 3.5em;
  position: relative;
  background-color: black;
  top: -4em;
`;

const SafteyRatingBar = () => {
  return (
    <Asset title={"Safety Rating Bar"}>
      <Container>
        <h3>Saftey Bar</h3>
        <Bar>
          <p>Insecure</p>
          <p>Poorly Secured</p>
          <p>Secured</p>
          <p>Well Secured</p>
        </Bar>
        <IndicatorBar>
          <IndicatorSpacer />
          <Indicator>
            <IndicatorBox />
            <IndicatorLine />
          </Indicator>
        </IndicatorBar>
      </Container>
    </Asset>
  );
};

export default SafteyRatingBar;
