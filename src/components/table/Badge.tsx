import { colorType } from "../../common/color";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: keyof typeof colorType;
  children: React.ReactNode;
}

function Badge({ type = "allow", children, ...props }: BadgeProps) {
  const { backgroundColor, color } = colorType[type];

  return (
    <span
      {...props}
      className={twMerge(
        `inline-block rounded-xl p-2 text-white`,
        props.className,
      )}
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
