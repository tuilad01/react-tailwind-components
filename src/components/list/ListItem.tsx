import React from "react";

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="bg-white p-4">{children}</li>;
}

export default ListItem;
