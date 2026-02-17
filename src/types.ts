export enum LOGICAL_OPERATOR {
  AND = "AND",
  OR = "OR",
}

export enum FIELD {
  Price = "Price",
  Category = "Category",
  Rating = "Rating",
}

export enum CONDITIONAL_OPERATOR {
  ">" = ">",
  "<" = "<",
  "=" = "=",
  "!=" = "!=",
  ">=" = ">=",
  "<=" = "<=",
  "contains" = "contains",
}

export type RuleNode = {
  id: string;
  type: "rule";
  field: FIELD;
  operator: CONDITIONAL_OPERATOR;
  value: string;
};

export type GroupNode = {
  id: string;
  type: "group";
  operator: LOGICAL_OPERATOR;
  children: (GroupNode | RuleNode)[];
};

export type AppNode = GroupNode | RuleNode;
