import Group from "./components/Group";
import "./app.css";
import Result from "./components/Result";
import { useNode } from "./hooks/useNode";

function App() {
  const { state } = useNode();

  return (
    <main
      className="w-full       
    flex flex-col items-center justify-between
    h-screen
    p-8
    gap-12
    overflow-auto
    "
    >
      <Group isRoot node={state} />

      <Result />
    </main>
  );
}

export default App;
