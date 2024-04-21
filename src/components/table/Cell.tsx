function Cell({
  isHeader,
  children,
}: {
  isHeader?: boolean;
  children: React.ReactNode;
}) {
  if (isHeader) {
    return <th className="p-4 bold">{children}</th>;
  }

  return <td className="p-4">{children}</td>;
}

export default Cell;
