import Cell from "./Cell";
export interface Column {
  name: string;
  displayName: string;
}

export interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}

function Table({ columns, data }: TableProps) {
  return (
    <table className="w-500px overflow-auto shadow-md">
      <thead>
        <tr className="shadow-lg">
          <Cell isHeader={true}>#</Cell>
          {columns.map((column) => (
            <Cell isHeader={true} key={`column-header-${column.name}`}>
              {column.displayName}
            </Cell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <Cell>{index + 1}</Cell>
            {columns.map((column) => (
              <Cell>{item[column.name]}</Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
