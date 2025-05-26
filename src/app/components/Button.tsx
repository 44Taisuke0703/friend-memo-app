type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button = ({ label, onClick, disabled, type, className }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick || undefined}
      disabled={disabled}
      className={`w-full py-2 mt-4 rounded-full duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${
        type === "submit"
          ? "bg-blue-400 text-gray-100 hover:bg-blue-500"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } transition-colors ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
