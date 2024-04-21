import "./App.css";
import ListExample from "./components/list/LIstExample";
import List from "./components/list/List";

function App() {
  return (
    <>
      <List items={[1, 2, 3]} />
      <ListExample></ListExample>
    </>
  );
}

export default App;
