import type { GroupNode } from "../types";
import ActionBar from "./ActionBar";
import Rules from "./Rules";

interface GroupProps {
  node: GroupNode;
  isRoot?: boolean;
}

const Group = (props: GroupProps) => {
  const { node, isRoot } = props;
  return (
    <div
      className={`${isRoot ? `w-full` : `w-auto ml-5`}  
        flex flex-col        
        my-3
        p-3
        pr-1
        bg-slate-800
        border-l-2 border-amber-300 gap-4`}
    >
      <ActionBar isRoot={isRoot} node={node} />
      {node?.children?.map((child) =>
        child?.type === "rule" ? (
          <Rules key={child?.id} rule={child} />
        ) : (
          <Group key={child?.id} node={child} />
        ),
      )}
    </div>
  );
};

export default Group;
