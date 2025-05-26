import {
  FieldValues,
  Path,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  label?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<T>;
  path: Path<T>;
  getValues?: UseFormGetValues<T>;
  config?: {
    [key: string]: unknown;
  };
};
const TextInput = <T extends FieldValues>({
  label,
  placeholder,
  type = "text",
  register,
  getValues,
  path,
  config = {},
}: TextInputProps<T>) => {
  return (
    <div className="w-full mb-2">
      {label && <label className="block text-gray-700 mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={getValues ? getValues(path) : ""}
        {...register(path, config)}
        className="w-full border rounded px-3 py-2 text-gray-700"
      />
    </div>
  );
};
export default TextInput;
