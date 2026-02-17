import { useNode } from "../hooks/useNode";
import { LOGICAL_OPERATOR, type GroupNode } from "../types";
import Button from "./Button";

interface ActionBarProps {
  isRoot?: boolean;
  node: GroupNode;
}

const ActionBar = (props: ActionBarProps) => {
  const { isRoot, node } = props;
  const { dispatch } = useNode();
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Button
          className={
            node?.operator === LOGICAL_OPERATOR.AND
              ? "bg-orange-400 text-black"
              : ""
          }
          onClick={() =>
            dispatch({
              type: "UPDATE_GROUP_OPERATOR",
              groupId: node?.id,
              operator: LOGICAL_OPERATOR.AND,
            })
          }
        >
          {LOGICAL_OPERATOR.AND}
        </Button>
        <Button
          className={
            node?.operator === LOGICAL_OPERATOR.OR
              ? "bg-orange-400 text-black"
              : ""
          }
          onClick={() =>
            dispatch({
              type: "UPDATE_GROUP_OPERATOR",
              groupId: node?.id,
              operator: LOGICAL_OPERATOR.OR,
            })
          }
        >
          {LOGICAL_OPERATOR.OR}
        </Button>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() =>
            dispatch({
              type: "ADD_RULE",
              groupId: node?.id,
            })
          }
        >
          Add Rule
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "ADD_GROUP",
              groupId: node?.id,
            })
          }
        >
          Add Group
        </Button>
        {!isRoot && (
          <Button
            onClick={() =>
              dispatch({
                type: "DELETE_NODE",
                id: node?.id,
              })
            }
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActionBar;
