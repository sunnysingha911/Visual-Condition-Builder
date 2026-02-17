import { useNode } from "../hooks/useNode";

const Result = () => {
  const { state } = useNode();

  return (
    <code
      className="p-8 w-full 
    rounded-xl 
    bg-black     
    text-lg    
    "
    >
      {JSON?.stringify(state, null, 4)}
    </code>
  );
};

export default Result;
