import React from "react";

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="m-2 bg-white p-4 shadow-md">{children}</li>;
}

export default ListItem;
