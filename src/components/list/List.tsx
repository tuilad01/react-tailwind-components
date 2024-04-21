import ListItem from "./ListItem";

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="overflow-hidden rounded-lg shadow-md ring-1 ring-gray-200">
      {items.map((item) => {
        return <ListItem>{item}</ListItem>;
      })}
    </ul>
  );
}

export default List;
