import Badge from "../table/Badge";
import List from "./List";

// How to use list
function ListExample() {
  return (
    <div className="m-4 w-[20rem]">
      <div>
        <h1>List 1</h1>
        <List
          items={[
            "Occaecat aliquip consequat.",
            "Enim ullamco et magna irur.",
            "Tempor elit non elit paria.",
            "Ut dolor nulla dolor occae.",
          ]}
        />
      </div>
      <div className="mt-4">
        <h1>List 2</h1>
        <List
          items={[
            <div className="flex items-center">
              <p className="truncate">Occaecat aliquip consequat</p>
              <Badge>Completed</Badge>
            </div>,
            <p className="truncate">
              Enim ullamco et magna irur
              <Badge type="forbidden">In process</Badge>
            </p>,
            <p className="truncate">
              Tempor elit non elit paria <Badge type="warning">Open</Badge>
            </p>,
            <p className="truncate">
              Ut dolor nulla dolor occae <Badge type="warning">Open</Badge>
            </p>,
          ]}
        />
      </div>
    </div>
  );
}

export default ListExample;
