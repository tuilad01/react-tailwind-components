import "./App.css";
import ListExample from "./components/list/LIstExample";
import List from "./components/list/List";
import Table from "./components/table/Table";

function App() {
  return (
    <>
      <Table
        columns={[
          {
            name: "name",
            displayName: "Name",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
          {
            name: "address",
            displayName: "Address",
          },
        ]}
        data={[
          {
            name: "Dat",
            address: "12 Tran Hung Dao",
          },
          {
            name: "Dat",
            address:
              "12 Tran Hung Daoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
          },
        ]}
      ></Table>
      <List items={[1, 2, 3]} />
      <ListExample></ListExample>
    </>
  );
}

export default App;
