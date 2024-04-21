import Badge from "./Badge";
import Table from "./Table";

function TableExample() {
  return (
    <div className="m-4">
      <Table
        columns={[
          { name: "name", displayName: "Name" },
          { name: "number", displayName: "Number" },
          { name: "address", displayName: "Address" },
        ]}
        data={[
          {
            name: "Dat",
            number: <Badge>123456789</Badge>,
            address: "123 Tran Hung Dao",
          },
          {
            name: "Dat",
            number: <Badge>123456789</Badge>,
            address: "123 Tran Hung Dao",
          },
          {
            name: "Dat",
            number: <Badge>123456789</Badge>,
            address: "123 Tran Hung Dao",
          },
          {
            name: "Dat",
            number: <Badge>123456789</Badge>,
            address: "123 Tran Hung Dao",
          },
        ]}
      ></Table>
    </div>
  );
}

export default TableExample;
