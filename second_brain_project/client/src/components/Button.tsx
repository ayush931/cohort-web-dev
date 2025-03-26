import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean
  loading?: boolean
}

const variantClass = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center justify-center";

function Button({ variant, text, startIcon, onClick, fullWidth, loading }: ButtonProps) {
  return (
    <button onClick={onClick} className={variantClass[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center" : ""} ${loading ? "opacity-20" : ""}`} disabled={loading}>
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}

export default Button;
