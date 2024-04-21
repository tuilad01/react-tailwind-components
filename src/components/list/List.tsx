import ListItem from "./ListItem";

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem>{item}</ListItem>;
      })}
    </ul>
  );
}

export default List;
