import React from "react";

type ButtonType = "standard" | "non-standard" | "icon";
type ButtonSize = "standard" | "small";
type backgroundColorType = "light" | "dark";
type textAllign = "center" | "right";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: ButtonType;
  size?: ButtonSize;
  border?: boolean;
  icon?: React.ReactNode;
  backgroundColor?: backgroundColorType;
  textallign?: textAllign;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  size = "standard",
  disabled,
  border,
  icon = false,
  backgroundColor,
  textallign = "center",
}) => {
  const variantClass = (variant: any) => {
    switch (variant) {
      case "standard":
        return "underline decoration-zinc-800 hover:decoration-white ";
      case "non-standard":
        return "hover:bg-red-600";
      case "icon":
        return "py-1 bg-inherit";
      default:
        return "underline decoration-zinc-800 hover:decoration-white ";
    }
  };

  const sizeClass =
    size === "standard" ? "px-3 py-2 w-36 text-sm " : "text-sm px-3 py-2.5";
  const disabledClass = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const borderClass = border ? "border-2 border-black" : "";
  const backgroundClass =
    backgroundColor === "dark"
      ? "bg-black-800 text-white font-bold"
      : "bg-green-900 text-black rounded-full";
  const textAlignClass =
    textallign === "center" ? "text-center text-lg" : "text-right";

  return (
    <button
      type="button"
      className={`${textAlignClass} ${backgroundClass} ${sizeClass} ${variantClass} ${borderClass} ${disabledClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;