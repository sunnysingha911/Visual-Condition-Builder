import { useNode } from "../hooks/useNode";
import { CONDITIONAL_OPERATOR, FIELD, type RuleNode } from "../types";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";

const fieldList: FIELD[] = [FIELD.Price, FIELD.Category, FIELD.Rating];

const operatorList: CONDITIONAL_OPERATOR[] = [
  CONDITIONAL_OPERATOR[">"],
  CONDITIONAL_OPERATOR["<"],
  CONDITIONAL_OPERATOR["="],
  CONDITIONAL_OPERATOR["!="],
  CONDITIONAL_OPERATOR[">="],
  CONDITIONAL_OPERATOR["<="],
  CONDITIONAL_OPERATOR["contains"],
];

interface RulesProps {
  rule: RuleNode;
}

const Rules = (props: RulesProps) => {
  const { rule } = props;
  const { dispatch } = useNode();
  return (
    <div
      className="
      flex gap-6 items-center 
      border-2 border-indigo-800
      p-2
      rounded-l
      bg-blue-950
      "
    >
      <Dropdown
        optionList={fieldList}
        onClick={(value) =>
          dispatch({
            type: "UPDATE_RULE_FIELD",
            ruleId: rule?.id,
            field: value,
          })
        }
      />
      <Dropdown
        optionList={operatorList}
        onClick={(value) =>
          dispatch({
            type: "UPDATE_RULE_OPERATOR",
            ruleId: rule?.id,
            operator: value,
          })
        }
      />
      <Input
        placeholder="Enter Value"
        onChange={(e) => {
          dispatch({
            type: "UPDATE_RULE_VALUE",
            ruleId: rule?.id,
            value: e?.target?.value,
          });
        }}
      />
      <Button
        onClick={() =>
          dispatch({
            type: "DELETE_NODE",
            id: rule?.id,
          })
        }
      >
        Delete
      </Button>
    </div>
  );
};

export default Rules;
