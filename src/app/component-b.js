import React from "react";
import { injectState, provideState } from "@julien-f/freactal";
import { Input } from "reactstrap";

const withState = provideState({
  initialState: () => ({}),
  effects: {
    handleName: (_, { target: { value } }) => state => ({
      ...state,
      name: value
    })
  }
});

const ComponentB = ({ state, effects }) => (
  <div>
    <Input
      type="text"
      placeholder="write your test text here"
      onChange={effects.handleName}
      value={state.name}
    />
  </div>
);

export default withState(injectState(ComponentB));
