interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const CustomInput = ({ icon, ...props }: InputProps) => {
  return (
    <div
      className="flex w-full h-14 rounded-lg border border-[#E5E7EB] items-center p-4"
      style={{ boxShadow: "0px 1.5px 4px -1px #1117291A" }}
    >
      <input
        type="text"
        className="w-full placeholder:text-[#6C727F]"
        {...props}
      />
      <div className="text-[#E5E7EB]">{icon}</div>
    </div>
  );
};

export default CustomInput;
