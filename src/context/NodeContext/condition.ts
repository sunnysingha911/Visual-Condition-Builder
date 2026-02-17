import {
  LOGICAL_OPERATOR,
  CONDITIONAL_OPERATOR,
  FIELD,
  type AppNode,
  type GroupNode,
  type RuleNode,
} from "../../types";

const createRule = (): RuleNode => ({
  type: "rule",
  id: crypto.randomUUID(),
  field: FIELD.Price,
  operator: CONDITIONAL_OPERATOR[">"],
  value: "",
});

const updateRule = (
  group: GroupNode,
  id: string,
  update: Partial<RuleNode>,
): GroupNode => {
  return {
    ...group,
    children: group?.children?.map((child) => {
      if (child?.type === "rule" && child?.id === id)
        return {
          ...child,
          ...update,
        };

      if (child?.type === "group") return updateRule(child, id, update);

      return child;
    }),
  };
};

const createGroup = (): GroupNode => ({
  type: "group",
  id: crypto.randomUUID(),
  operator: LOGICAL_OPERATOR.AND,
  children: [],
});

const addNodeToGroup = (
  group: GroupNode,
  id: string,
  node: AppNode,
): GroupNode => {
  if (group?.id === id) {
    return {
      ...group,
      children: [...(group?.children || []), node],
    };
  }

  return {
    ...group,
    children: group?.children?.map((child) =>
      child?.type === "group" ? addNodeToGroup(child, id, node) : child,
    ),
  };
};

const deleteNode = (group: GroupNode, id: string): GroupNode => {
  return {
    ...group,
    children: group?.children
      ?.filter((child) => child?.id !== id)
      ?.map((child) =>
        child?.type === "group" ? deleteNode(child, id) : child,
      ),
  };
};

const updateNode = (
  group: GroupNode,
  id: string,
  operator: LOGICAL_OPERATOR,
): GroupNode => {
  if (group?.id === id) {
    return { ...group, operator };
  }

  return {
    ...group,
    children: group?.children?.map((child) =>
      child?.type === "group" ? updateNode(child, id, operator) : child,
    ),
  };
};

export type ConditionAction =
  | { type: "UPDATE_RULE_FIELD"; ruleId: string; field: FIELD }
  | {
      type: "UPDATE_RULE_OPERATOR";
      ruleId: string;
      operator: CONDITIONAL_OPERATOR;
    }
  | { type: "UPDATE_RULE_VALUE"; ruleId: string; value: string }
  | { type: "ADD_RULE"; groupId: string }
  | { type: "ADD_GROUP"; groupId: string }
  | { type: "DELETE_NODE"; id: string }
  | {
      type: "UPDATE_GROUP_OPERATOR";
      groupId: string;
      operator: LOGICAL_OPERATOR;
    };

export const nodeReducer = (state: GroupNode, action: ConditionAction) => {
  switch (action?.type) {
    case "ADD_RULE":
      return addNodeToGroup(state, action.groupId, createRule());

    case "UPDATE_RULE_FIELD":
      return updateRule(state, action.ruleId, {
        field: action?.field,
      });

    case "UPDATE_RULE_OPERATOR":
      return updateRule(state, action.ruleId, {
        operator: action?.operator,
      });

    case "UPDATE_RULE_VALUE":
      return updateRule(state, action.ruleId, {
        value: action?.value,
      });

    case "ADD_GROUP":
      return addNodeToGroup(state, action.groupId, createGroup());

    case "DELETE_NODE":
      return deleteNode(state, action.id);

    case "UPDATE_GROUP_OPERATOR":
      return updateNode(state, action?.groupId, action?.operator);

    default:
      return state;
  }
};
