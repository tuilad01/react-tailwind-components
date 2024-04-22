function Cell({
  isHeader,
  children,
}: {
  isHeader?: boolean;
  children: React.ReactNode;
}) {
  if (isHeader) {
    return <th className="p-4 bold min-w-48 truncated break-words">{children}</th>;
  }

  return <td className="p-4 break-all min-w-48">{children}</td>;
}

export default Cell;
