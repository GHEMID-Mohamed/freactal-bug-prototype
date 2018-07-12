import React from "react";
import { injectState, provideState } from "@julien-f/freactal";
import { Container } from "reactstrap";

import ComponentB from "./component-b";

const withState = provideState({
  initialState: () => ({
    name: ""
  }),
  effects: {}
});

const ComponentA = ({ state, effects }) => (
  <Container>
    <br />
    <ComponentB />
  </Container>
);

export default withState(injectState(ComponentA));
