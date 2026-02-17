import { createContext } from "react";
import type { GroupNode } from "../../types";
import type { ConditionAction } from "./condition";

export type NodeContextType = {
  state: GroupNode;
  dispatch: React.Dispatch<ConditionAction>;
};

export const NodeContext = createContext<NodeContextType | undefined>(
  undefined,
);
