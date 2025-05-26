const FieldError = ({ error }: { error: string }) => {
  return <span className="text-red-500 text-sm">{error}</span>;
};

export default FieldError;
