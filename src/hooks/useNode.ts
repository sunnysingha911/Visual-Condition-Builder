import { useContext } from "react";
import { NodeContext, type NodeContextType } from "../context";

export const useNode = (): NodeContextType => {
  const context = useContext(NodeContext);

  if (!context) {
    throw new Error("useNode must be used inside NodeContextProvider");
  }

  return context;
};
