import Badge from "../table/Badge";
import List from "./List";

function ListExample() {
  return (
    <div className="w-[20rem]">
      <div>
        <h1>List 1</h1>
        <List items={[1, 2, 3, 4]} />
      </div>
      <div className="mt-4">
        <h1>List 2</h1>
        <List
          items={[
            <p>
              Task 1 <Badge>Completed</Badge>
            </p>,
            <p>
              Task 2 <Badge type="forbidden">In process</Badge>
            </p>,
            <p>
              Task 3 <Badge type="warning">Open</Badge>
            </p>,
          ]}
        />
      </div>
    </div>
  );
}

export default ListExample;
