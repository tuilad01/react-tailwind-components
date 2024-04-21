import { colorType } from "../../common/color";

function Badge({
  type = "allow",
  children,
}: {
  type?: keyof typeof colorType;
  children: React.ReactNode;
}) {
  const { backgroundColor, color } = colorType[type];
  return (
    <span
      className={`rounded-xl p-2 text-white`}
      style={{
        backgroundColor,
        color,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
