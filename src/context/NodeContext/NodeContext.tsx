import React, { useReducer } from "react";
import { LOGICAL_OPERATOR, type GroupNode } from "../../types";
import { NodeContext } from "./context";
import { nodeReducer } from "./condition";

interface NodeContextProviderProps {
  children: React.ReactNode;
}

const initialState: GroupNode = {
  type: "group",
  children: [],
  operator: LOGICAL_OPERATOR.AND,
  id: "root",
};

export const NodeContextProvider = (props: NodeContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(nodeReducer, initialState);

  return (
    <NodeContext.Provider value={{ state, dispatch }}>
      {children}
    </NodeContext.Provider>
  );
};
